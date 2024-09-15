import express from "express";
import {generateToken} from "@src/middlewares"
import {loginController} from "@src/controllers" 


const router = express.Router();
router.route("/")
    .post(loginController, generateToken)
export { router as loginRoute };
