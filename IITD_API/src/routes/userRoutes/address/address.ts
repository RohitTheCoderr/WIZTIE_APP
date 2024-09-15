import { Router } from "express";
import { addAddressController, updateAddressController, getAddressesController, deleteAddressesController } from "@src/controllers/userController/addressController"
import { verifyToken } from "@src/middlewares";

const router = Router()
router.route("/")
    .all(verifyToken)
    .get(getAddressesController)
    .post(addAddressController)
    .patch(updateAddressController)
    .delete(deleteAddressesController)

export { router as userAddress }