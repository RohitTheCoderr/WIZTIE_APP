import { RequestHandler, NextFunction, Request, Response } from "express";
import { profileWhileUpdateValidator, userProfileValidator } from "@src/validation_schema";
import { logger } from "@src/logger";
import { userProfileModel } from "@src/models"
import { StatusCodes } from "http-status-codes";


////////////////
const addUserProfileController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logger.info("profile data saving..", { __filename })
        const userId = (req as any).userId;
        if (!req.files || !req.body) {
            return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "No files or details not found!" });
        }

        let profileImg: any;
        if (Array.isArray(req.files)) {
            profileImg = req.files.map((file: any) => ({
                data: file.buffer.toString("base64"),
                contentType: file.mimetype
            }));
        }
        //  // Handle product details
        let details: any;
        if (typeof req.body === 'string') {
            details = JSON.parse(req.body);
        } else {
            details = req.body;
        }
        const Alldet = await userProfileValidator.validateAsync({ profileImg, ...details })


        const userProfiles = await userProfileModel.findOne({ userId })
        if (!userProfiles?.userProfile) {
            await userProfileModel.create({
                userId, userProfile: Alldet
                // userId, userProfile: [{
                //     fullName,
                //     Gender,
                //     DOB,
                //     email,
                //     PhoneNumber,
                //     Address,
                //     city,
                //     aboutMsg,
                //     education,
                //     position,
                //     service,
                //     skills,
                //     profileImg,
                //     careerBreak,
                //     lindinProfileLink,
                //     instagramProfileLink,
                // }]
            })
            return res.status(StatusCodes.OK).json({ success: true, message: "User profile created.   " })
        }
        else {
            return res.status(StatusCodes.OK).json({ success: true, message: "User profile allready exists.   " })
        }

    } catch (error) {
        logger.error(`exception occurred at addUserProfileController : ${JSON.stringify(error)}`, { __filename });
        next(error);
    }
}
////////////////
const updateUserProfileController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logger.info("profile updating.", { __filename })
        const userId = (req as any).userId;
        const { fullName,
            Gender,
            DOB,
            email,
            PhoneNumber,
            Address,
            city,
            aboutMsg,
            education,
            position,
            service,
            skills,
            profileImg,
            careerBreak,
            lindinProfileLink,
            instagramProfileLink,
            profileId
        } = await profileWhileUpdateValidator.validateAsync(req.body)

        await userProfileModel.findOneAndUpdate({ userId, "profile._id": profileId }, {
            $set: {
                "profileId.$.fullName": fullName,
                "profileId.$.Gender": Gender,
                "profileId.$.DOB": DOB,
                "profileId.$.email": email,
                "profileId.$.PhoneNumber": PhoneNumber,
                "profileId.$.Address": Address,
                "profileId.$.city": city,
                "profileId.$.aboutMsg": aboutMsg,
                "profileId.$.education": education,
                "profileId.$.position": position,
                "profileId.$.service": service,
                "profileId.$.skills": skills,
                "profileId.$.profileImg": profileImg,
                "profileId.$.careerBreak": careerBreak,
                "profileId.$.lindinProfileLink": lindinProfileLink,
                "profileId.$.instagramProfileLink": instagramProfileLink,
            }
        })
        return res.status(StatusCodes.OK).json({ success: true, message: "User profile updated.   " })
    } catch (error) {
        logger.error(`exception occurred at updateUserProfileController : ${JSON.stringify(error)}`, { __filename });
        next(error);
    }
}
////////////////
const getuserProfileController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logger.info("getting user profile ..", { __filename })
        const userId = (req as any).userId;
        const userProfiles = await userProfileModel.findOne({ userId })
        if (!userProfiles?.userProfile) {
            return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "user Profile not found" })
        }

        return res.status(StatusCodes.OK).json({ success: true, message: "user Profile  fetched...", data: { userProfiles: userProfiles?.userProfile } })
    } catch (error) {
        logger.error(`exception occurred at getuserProfileController : ${JSON.stringify(error)}`, { __filename });
        next(error);
    }
}

const findUserDataController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logger.info("Getting user data", { __filename });

        // Check if userId exists in the request body

        const userID = (req as any).body.userId;
        if (!userID) {
            return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "userId is required" });
        }
        // Fetch the user profile using the userId
        const userProfiles = await userProfileModel.findOne({ userId: userID })

        // If no profile is found, return an error response
        if (!userProfiles) {
            return res.status(StatusCodes.NOT_FOUND).json({ success: false, message: "User profile not found" });
        }

        // Return the fetched profile with a success status
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "User profile data fetched successfully",
            data: userProfiles,  // No need to spread the object
        });

    } catch (error) {
        // Log and pass the error to the next middleware
        logger.error(`Exception occurred at findUserDataController: ${JSON.stringify(error)}`, { __filename });
        next(error);
    }
};

const getAlluserProfileController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logger.info("getting user profile ..", { __filename })
        // const userId = (req as any).userId;
        const userProfiles = await userProfileModel.find()
        if (!userProfiles) {
            return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "No any user not found" })
        }

        return res.status(StatusCodes.OK).json({ success: true, message: "user Profiles  fetched...", data: { userProfiles: userProfiles } })
    } catch (error) {
        logger.error(`exception occurred at getAlluserProfileController : ${JSON.stringify(error)}`, { __filename });
        next(error);
    }
}

const deleteuserProfileController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logger.info("getting User Profile ..", { __filename })
        const userId = (req as any).userId;

        // only update this +++ start
        if (!userId) {
            return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "please provide userId" })
        }
        await userProfileModel.deleteOne({ userId })
        // only update this +++ end


        // const { profileId } = req.body
        // if (!profileId) {
        //     return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "please provide profile Id" })
        // }
        // const { modifiedCount } = await userProfileModel.updateOne({ userId }, {
        //     $pull: { userProfile: { _id: profileId } }
        // })

        // if (modifiedCount == 0) {
        //     return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "something went wrong" })
        // }
        return res.status(StatusCodes.OK).json({ success: true, message: " user profile deleted.." })
    } catch (error) {
        logger.error(`exception occurred at deleteuserProfileController : ${JSON.stringify(error)}`, { __filename });
        next(error);
    }
}



export { addUserProfileController, updateUserProfileController, getuserProfileController, getAlluserProfileController, deleteuserProfileController, findUserDataController,  }