import { Router } from "express";
import { verifyToken, verifyOtpMiddleware } from "@src/middlewares"
import {updatePhoneOrEmailController} from "@src/controllers"

const router = Router()
router.route("/")
    .patch(verifyToken, verifyOtpMiddleware, updatePhoneOrEmailController)

export { router as updatePhoneOrEmailRoute }