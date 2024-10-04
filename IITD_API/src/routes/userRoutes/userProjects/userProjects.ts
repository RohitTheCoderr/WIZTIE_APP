import { Router } from "express";
import { verifyToken } from "@src/middlewares";
import { upload } from "@src/services/lib/multer";
import { createUserProjectsController } from "@src/controllers";

const router = Router();

// Apply token verification for all requests to this route
router.route("/")
    .all(verifyToken) // Ensure that user is authenticated
    .post(upload.array("userProjects"), createUserProjectsController); // Handle project creation and file uploads

export { router as userProjects }
