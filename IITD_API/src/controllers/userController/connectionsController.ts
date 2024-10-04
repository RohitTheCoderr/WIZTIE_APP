import { RequestHandler, NextFunction, Request, Response } from "express";
import { profileConnectionValidator } from "@src/validation_schema";
import { logger } from "@src/logger";
import { ProfileConnectionModel, userProfileModel } from "@src/models";
import { StatusCodes } from "http-status-codes";

const addToUserConnectionController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logger.info(`Adding user profile to connections...`);
        
        const { userID } = req.body;  // The userID to add to connections
        const userId = (req as any).userId;  // The authenticated user's ID

        // Validate request body with Joi
        const { error } = profileConnectionValidator.validate({ userId, connections: [{ userIDs: userID }] });
        if (error) {
            logger.warn(`Validation failed: ${error.details[0].message}`);
            return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: error.details[0].message });
        }

        // Check if userID exists in the database
        const isUserInDB = await userProfileModel.findOne({ userId: userID });
        if (!isUserInDB) {
            return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "User not available for connections" });
        }

        // Check if the current user already has a connection profile
        const existingConnection = await ProfileConnectionModel.findOne({ userId });

        if (!existingConnection) {
            // No existing connection, so create a new connection profile
            logger.info(`Adding user to connections for the first time...`);
            await ProfileConnectionModel.create({
                userId,
                connections: [{ userIDs: userID }]
            });
            return res.status(StatusCodes.CREATED).json({ success: true, message: "First user profile added to connections" });
        } else {
            // User already has a connection profile, update it
            logger.info(`Updating profile in connections...`);

            // Check if the user is already in the connections array
            const isUserAlreadyConnected = await ProfileConnectionModel.findOne({
                userId,
                'connections.userIDs': userID
            });

            if (!isUserAlreadyConnected) {
                // Add the userID to the connections array
                await ProfileConnectionModel.updateOne(
                    { userId },
                    { $addToSet: { connections: { userIDs: userID } } }
                );
                return res.status(StatusCodes.CREATED).json({ success: true, message: "Profile added to connections" });
            }

            return res.status(StatusCodes.OK).json({ success: true, message: "Profile already in connections" });
        }
    } catch (error) {
        logger.error(`Exception occurred at addToUserConnectionController: ${error}`, { __filename });
        next(error);
    }
};


/////////////
const deleteUserConnectionController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logger.info(`Remove user profile to connections...`);
        const { userID } = req?.body
        const userId = (req as any).userId

        if (!userID) {
            res.status(StatusCodes.BAD_GATEWAY).json({ success: false, message: "please provide userID" });
        }

        logger.info(`updating Connections....`);

        const updateResult = await ProfileConnectionModel.updateOne(
            { userId },
            { $pull: { connections: { userIDs: userID } } }
        );

        if (updateResult.modifiedCount === 0) {
            return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "user profile not found.." });
        }
        return res.status(StatusCodes.OK).json({ success: true, message: "user profile remove from connections..." });
    } catch (error) {
        logger.error(`Exception occurred at deleteUserConnectionController: ${JSON.stringify(error)} `, { __filename });
        next(error);
    }
}

const getUserConnectionsController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logger.info(`Getting user connections...`);

        const userId = (req as any).userId;
        const userConnections = await ProfileConnectionModel.findOne({ userId }).lean();

        if (!userConnections) {
            return res.status(StatusCodes.OK).json({ success: false, message: "No connections found" });
        }

        const connectionPromises = userConnections?.connections?.map(async (user) => {
            logger.info(`Fetching profile for userID: ${user?.userIDs}`);

            // Fetch the user profile
            const singleUser = await userProfileModel.findOne({ userId: user?.userIDs }).lean();
            if (!singleUser) {
                logger.warn(`User profile not found for userID: ${user?.userIDs}`);
            }
            return {
                ...singleUser,
                // profileConnection: user?.connection
                profileConnection: true
            };
        });
        // // Resolve all the promises
        const connections = await Promise.all(connectionPromises);

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Fetched user connections",
            data: { connections }
        });

    } catch (error) {
        logger.error(`Exception occurred at getUserConnectionsController: ${JSON.stringify(error)} `, { __filename });
        next(error);
    }
};

export {addToUserConnectionController, getUserConnectionsController, deleteUserConnectionController}