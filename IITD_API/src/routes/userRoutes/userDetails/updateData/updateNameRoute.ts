import { Router } from "express";
import { verifyToken } from "@src/middlewares"
import {updateNameController} from "@src/controllers"

const router = Router()
router.route("/")
    .patch(verifyToken, updateNameController)

export { router as updateNameRoute }