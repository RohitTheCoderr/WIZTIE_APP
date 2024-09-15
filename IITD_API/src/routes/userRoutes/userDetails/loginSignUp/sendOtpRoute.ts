import { Router } from "express";
import { checkAccountExist } from "@src/controllers"
import {sendOtpMiddleware} from "@src/middlewares"
const router = Router()
router.route("/")
    .post(checkAccountExist, sendOtpMiddleware)

export {router as sendSignUpOTPRoute}
