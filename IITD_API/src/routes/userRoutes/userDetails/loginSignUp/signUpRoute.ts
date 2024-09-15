import express from "express";
import {generateToken,verifyOtpMiddleware} from "@src/middlewares"
import {signUpController} from "@src/controllers" 


const router = express.Router();
router.route("/")
    .post(verifyOtpMiddleware,signUpController,generateToken)
export { router as signUpRoute };
