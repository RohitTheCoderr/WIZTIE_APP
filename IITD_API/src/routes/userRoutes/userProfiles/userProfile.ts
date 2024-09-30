import { Router } from "express";
import { addUserProfileController, getuserProfileController,updateUserProfileController, getAlluserProfileController, deleteuserProfileController, findUserDataController, addToUserConnectionController, deleteUserConnectionController, getUserConnectionsController } from "@src/controllers/userController/userProfileController"
import { verifyToken } from "@src/middlewares";
import { upload } from "@src/services/lib/multer"

const router = Router()
router.route("/")
    .all(verifyToken)
    .get(getuserProfileController)
    .post(upload.array("profileImg"), addUserProfileController)
    .patch(updateUserProfileController)
    .delete(deleteuserProfileController)
    
    
router.route("/all_user_profile")
        .get(verifyToken, getAlluserProfileController)
    
router.route("/find_user")
        .post(verifyToken, findUserDataController)

router.route("/add_connection")
.post(verifyToken, addToUserConnectionController)

router.route("/delete_connection")
.post(verifyToken, deleteUserConnectionController)

router.route("/get_connection")
.get(verifyToken, getUserConnectionsController)

export { router as userProfile }