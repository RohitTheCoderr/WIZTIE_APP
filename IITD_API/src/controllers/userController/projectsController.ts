import { RequestHandler, NextFunction, Request, Response } from "express";
import { userProjectsValidator } from "@src/validation_schema"; // Add your validation schema import
import { logger } from "@src/logger"; // Add logger import
import { userProjectsModel, userProfileModel } from "@src/models"; // Add model imports
import { StatusCodes } from "http-status-codes"; // Add StatusCodes for cleaner response codes

const createUserProjectsController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logger.info("Saving user projects data...", { __filename });

        // Get the authenticated user's ID from the request object
        const userId = (req as any).userId;

        // Ensure that both files and body content are present in the request
        if (!req.files || !req.body) {
            return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "No files or details provided!" });
        }

        // Process uploaded files (assuming multer is used for file handling)
        let userProjects: any;
        if (Array.isArray(req.files)) {
            userProjects = req.files.map((file: any) => ({
                data: file.buffer.toString("base64"),
                contentType: file.mimetype
            }));
        }

        // Parse project details from the request body
        let projectDetails: any;
        if (typeof req.body === 'string') {
            projectDetails = JSON.parse(req.body);
        } else {
            projectDetails = req.body;
        }

        // Combine file data and project details for validation
        const allDetails = { userProjects, ...projectDetails };

        // Validate project details
        const validatedDetails = await userProjectsValidator.validateAsync(allDetails);

        // Check if the user already has a profile
        const existingUserProjects = await userProjectsModel.findOne({ userId });

        if (!existingUserProjects) {
            // Create a new user projects record
            await userProfileModel.create({
                userId,
                userProjects: validatedDetails
            });
            return res.status(StatusCodes.CREATED).json({ success: true, message: "User projects created successfully." });
        } else {
            return res.status(StatusCodes.OK).json({ success: true, message: "User projects already exist." });
        }

    } catch (error) {
        // Log the error and forward it to the error handler middleware
        logger.error(`Exception occurred at createUserProjectsController: ${JSON.stringify(error)}`, { __filename });
        next(error);
    }
};

export { createUserProjectsController };
