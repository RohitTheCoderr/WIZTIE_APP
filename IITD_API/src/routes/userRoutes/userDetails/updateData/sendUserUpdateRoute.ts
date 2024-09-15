import { Router } from "express";
import { checkAccountExist } from "@src/controllers"
import {sendOtpMiddleware,verifyToken} from "@src/middlewares"
const router = Router()
router.route("/")
    .post(checkAccountExist, verifyToken, sendOtpMiddleware)

export {router as sendUpdatePhoneOrEmailRoute}
