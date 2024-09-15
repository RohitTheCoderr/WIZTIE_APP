import express from "express";
import {generateToken,verifyOtpMiddleware} from "@src/middlewares"
import {passwordChangeController} from "@src/controllers" 


const router = express.Router();
router.route("/")
    .patch(verifyOtpMiddleware,passwordChangeController,generateToken)
export { router as passwordChangeRoute };
