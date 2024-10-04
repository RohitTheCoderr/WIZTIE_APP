import { RequestHandler, NextFunction, Request, Response } from "express";
import {loginValidator, signUpValidator, ChangePasswordValidator,updatePhoneOrEmailValidator, updateNameValidator} from "@src/validation_schema";
import { logger } from "@src/logger";
import { verifyHashedPassword } from "@src/services/lib/bcrypt"
import { UserModel } from "@src/models"
import { StatusCodes } from "http-status-codes";
import { generateHashedPassword } from "@src/services/lib/bcrypt"
import { SendOtpValidator } from "@src/validation_schema"
import { sendOTPOnEmail } from "@src/services/lib/mailOtp";

//////////////////////////
const checkAccountExist: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    logger.info("OTP sending start", { __filename })
    const { phoneNumber, email } = await SendOtpValidator.validateAsync(req.body)

    let user;
    if (phoneNumber) {
      user = await UserModel.findOne({ phoneNumber })
    }
    else if (email) {
      user = await UserModel.findOne({ email })
    }


    logger.info(`user  --> ${user}`)
    logger.info(`req  --> ${req.baseUrl}`)


    if (req?.baseUrl == "/user/send_signup_otp" || req?.baseUrl == "/user/send_phone_or_email_otp") {
      if (user) {
        return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "user already exist.", data: {} })
      }
      else {
        return next()
      }
    }
    else if (req?.baseUrl == "/user/send_forgot_password_otp") {
      if (user) {
        logger.info(`check user ${user}`)
        return next()
      }
      else {
        return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "user not exist.", data: {} })
      }
    }
    else {
      return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "Send_forgot_password_otp Or send_signup_otp Or /send_forgot_password_otp is only allowed route for send otp", data: {} })
    }

  } catch (error) {
    logger.error(`exception occurred at checkAccountExist : ${JSON.stringify(error)}`, { __filename });
    next(error);
  }
}


//////////////////////////
const signUpController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let userData = await signUpValidator.validateAsync(req.body);

    logger.info(`signUp data ${JSON.stringify(userData)}`, { __filename });


    let user;

    if (userData?.phoneNumber) {
      user = await UserModel.findOne({ phoneNumber: userData?.phoneNumber })
    }
    else if (userData?.email) {
      user = await UserModel.findOne({ email: userData?.email })
    }

    if (user) {
      return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "user already exist." })
    }

    userData.password = await generateHashedPassword(userData.password)
    const newUser = await UserModel.create(userData);
    logger.info(`user created ${newUser}`, { __filename })
    if (newUser._id) {
      (req as any).userId = newUser._id;
      return next()
    }
    else {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: "user not created" })
    }
  } catch (error) {
    logger.error(`exception occurred at signUpController : ${JSON.stringify(error)}`, { __filename });
    return next(error);
  }
};


/////////////////////////
const loginController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let userData = await loginValidator.validateAsync(req.body);
    logger.info(`login start`, { __filename });

    let user;
    if (userData?.phoneNumber) {
      user = await UserModel.findOne({ phoneNumber: userData?.phoneNumber }).select({ "password": 1 })
      logger.info(`user data ${user}`, { __filename })
    }
    else if (userData?.email) {
      user = await UserModel.findOne({ email: userData?.email }).select({ "password": 1 })
    }

    if (!user) { res.status(StatusCodes.UNAUTHORIZED).json({ success: false, message: "user not found." }) }

    if (user && (await verifyHashedPassword(userData.password, user.password))) {
      (req as any).userId = user._id;
      next()
    }
    else {
      res.status(StatusCodes.UNAUTHORIZED).json({ success: false, message: "wrong password!", data: {} })
    }
  } catch (error) {
    logger.error(`exception occurred at loginController : ${JSON.stringify(error)}`, { __filename });
    next(error);
  }
};


//////////////////////////
const getUserDataController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    logger.info("getting user Data", { __filename })
    const userID = (req as any).userId
    const userData = await UserModel.findById(userID).select({ "_id": 0, "__v": 0, }).lean()

    if (!userData) {
      res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "user not found" })
    }
    res.status(StatusCodes.ACCEPTED).json({ success: true, message: "user data fetched successfully", data: { ...userData } })
  } catch (error) {
    logger.error(`exception occurred at getUserDataController : ${JSON.stringify(error)}`, { __filename });
    next(error)
  }
}

//////////////////////////
const deleteAllUserController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await UserModel.deleteMany({})
    return res.status(StatusCodes.ACCEPTED).json({ success: true, message: "All user Delete", data: {} })
  }
  catch (error) {
    logger.error(`exception occurred at deleteAllUserController : ${JSON.stringify(error)}`, { __filename });
    next(error);
  }
}


//////////////////////////  

const updatePhoneOrEmailController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let userData = await updatePhoneOrEmailValidator.validateAsync(req.body);
    logger.info(`user details update start ${JSON.stringify(userData)}`, { __filename });

    if ((req as any).userId) {
      await UserModel.findByIdAndUpdate((req as any).userId, { ...userData })
      res.status(StatusCodes.CREATED).json({ success: true, message: "user details updated", data: {} })
    } else {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: "please provide valid token" })
    }

  } catch (error) {
    logger.error(`exception occurred at updatePhoneOrEmailController : ${JSON.stringify(error)}`, { __filename });
    return next(error);
  }
};

//////////////////////////  

const updateNameController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let userData = await updateNameValidator.validateAsync(req.body);
    logger.info(`user Name update start ${JSON.stringify(userData)}`, { __filename });

    if ((req as any).userId) {
      await UserModel.findByIdAndUpdate((req as any).userId, { ...userData })
      res.status(StatusCodes.CREATED).json({ success: true, message: "user Name updated", data: {} })
    } else {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: "please provide valid token" })
    }

  } catch (error) {
    logger.error(`exception occurred at updatePhoneOrEmailController : ${JSON.stringify(error)}`, { __filename });
    return next(error);
  }
};


///////////////////////////////////  password forget //////////////////////////////


//////////////////////////
const passwordChangeController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let userData = await ChangePasswordValidator.validateAsync(req.body);

    logger.info(`password change start at passwordChangeController ${JSON.stringify(userData)}`, { __filename });

    const password = await generateHashedPassword(userData.password)

    let newUser;

    if (userData?.phoneNumber) {
      newUser = await UserModel.findOneAndUpdate(
        { phoneNumber: userData.phoneNumber },
        { $set: { password: password } },
        { new: true, returnOriginal: false }
      );
    } else if (userData?.email) {
      newUser = await UserModel.findOneAndUpdate(
        { email: userData.email },
        { $set: { password: password } },
        { new: true, returnOriginal: false }
      );
    } else {
      logger.error("No phone number or email provided in userData");
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: "No phone number or email provided in userData" })
    }


    if (newUser?._id) {
      if (userData?.email) {

        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: 'Asia/Kolkata',
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        };

        const istDateTime = new Intl.DateTimeFormat('en-IN', options).format(now);

        await sendOTPOnEmail({
          to: userData?.email || '',
          subject: "Your Password Has Been Updated",
          html: `
              <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                  <h2>Password Update Notification</h2>
                  <p>Dear ${newUser.name || 'User'},</p>
                  <p>Your password has been successfully updated.</p>
                  <p>Date and Time (IST): <strong>${istDateTime}</strong></p>
                  <p>If you did not request this change, please contact our support team immediately.</p>
                  <p>Thank you for choosing ShopEase!</p>
                  <p>Best regards,<br>ShopEase Support Team<br><a href="mailto:support@shopease.com">support@shopease.com</a></p>
              </div>
          `
        });
      }

      (req as any).userId = newUser._id;

      return next();
    }
    else {
      throw new Error("issue with finding user")
    }

  } catch (error) {
    logger.error(`exception occurred at passwordChangeController : ${JSON.stringify(error)}`, { __filename });
    return next(error);
  }
};



export { checkAccountExist, signUpController, loginController, updatePhoneOrEmailController, deleteAllUserController, passwordChangeController, getUserDataController, updateNameController };


