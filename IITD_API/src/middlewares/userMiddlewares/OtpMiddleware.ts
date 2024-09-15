import { RequestHandler, NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { sendOtp } from "@src/services/lib/otpLess"
import { logger } from "@src/logger"
import { sendOTPOnEmail } from "@src/services/lib/mailOtp"
import { SendOtpValidator } from "@src/validation_schema"
import { verifyOtp } from "@src/services/lib/otpLess"
import { VerifyOtpValidator } from "@src/validation_schema"
import { otpModel } from "@src/models"

const sendOtpMiddleware: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {

    logger.info("Opt sending start..")

    const email = req.body?.email
    const phoneNumber = req.body?.phoneNumber

    if (!phoneNumber && !email) {
      return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "please provide  phoneNumber or email", data: {} })
    }

    await SendOtpValidator.validateAsync({ phoneNumber, email })

    let result, mailOtp;
    ///////////// For Email //////////////////
    if (email) {
      mailOtp = Math.floor(1000 + Math.random() * 9000)
      result = await sendOTPOnEmail({
        to: email,
        subject: "verify your email account",
        html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>ShopEase OTP Verification</h2>
      <p>Dear Customer,</p>
      <p>Your OTP for verification : <strong>${mailOtp}</strong></p>
      <p>Please enter this code on the website to proceed. This OTP is valid for the next 10 minutes.</p>
      <p>If you did not request this, please ignore this message or contact our support team immediately.</p>
      <p>Thank you for choosing ShopEase!</p>
      <p>Best regards,<br>ShopEase Support Team<br><a href="mailto:support@shopease.com">support@shopease.com</a></p>
     </div>
        ` })
    }

    ///////////// For Email //////////////////

    if (phoneNumber) {
      result = await sendOtp(phoneNumber, "WHATSAPP")
      // result = await sendOtp(phoneNumber, "SMS")
    }

    if (result?.success) {
      logger.info("OTP send successful...")
      const otpID = (result?.message)?.startsWith("Otp") ? result?.message : false
      if (mailOtp && email) {
        let expiresAt = new Date()
        expiresAt.setMinutes(expiresAt.getMinutes() + 10);

        if (await otpModel.findOne({ email })) {
          await otpModel.findOneAndUpdate({ email }, { mailOtp, expiresAt })
        }
        else {
          await otpModel.create({ email, mailOtp, expiresAt })
        }
      }

      return res.status(StatusCodes.CREATED).json({ success: true, message: "OTP send succesfully", data: { otpID } });
    }
    else
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: "OTP not generated" })

  } catch (error) {
    logger.error(`exception occurred at ${JSON.stringify(error)}`, { __filename });
    next(error);
  }
};




const verifyOtpMiddleware: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    logger.info("OTP verifying starts")

    const phoneNumber = req.body?.phoneNumber;
    const email = req.body?.email;
    const otp = req.body.otp
    const otpID = req.body.otpID


    if (!phoneNumber && !email && !otp) {
      res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "please provide  phoneNumber or email and OTP", data: {} })
    }

    await VerifyOtpValidator.validateAsync({ phoneNumber, email, otp, otpID })
    let result;

    ///////////// For Email //////////////////
    if (email) {
      const data = await otpModel.findOne({ email }, { mailOtp: 1 })
      logger.info(`mailOtp ${data}`, { __filename })
      if (data?.mailOtp == otp) {
        result = { success: true, message: "OTP Verified successfully" }
        await otpModel.findOneAndDelete({ email })
      }
    }

    ///////////// For phoneNumber //////////////////

    if (phoneNumber) {
      if (!otpID) {
        res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "please provide OTP ID", data: {} })
      }
      result = await verifyOtp(phoneNumber, otpID, otp)
    }
    ////////////////////
    if (result?.success) {
      logger.info(`${result?.message}`, { __filename })
      delete req.body.otp
      delete req.body.otpID
      return next()
    }
    else
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: "OTP not Verified" })
  } catch (error) {
    logger.error(`exception occurred at ${JSON.stringify(error)}`, { __filename });
    next(error);
  }
};


export { sendOtpMiddleware, verifyOtpMiddleware };
