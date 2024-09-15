import express from "express";
import {
    sendSignUpOTPRoute, loginRoute, signUpRoute, sendForgetOTPRoute,
    passwordChangeRoute, updatePhoneOrEmailRoute, sendUpdatePhoneOrEmailRoute,
    userDataRoute, updateNameRoute, userAddress
} from "@src/routes/userRoutes"

import { deleteAllUserController } from "@src/controllers"

// router
const router = express.Router();

/////////////// routes for user  ///////////////
// delete all user
router.use("/clear_users", deleteAllUserController)

// get user Data 
router.use("/user_data", userDataRoute)

// signup login 
router.use("/send_signup_otp", sendSignUpOTPRoute)
router.use("/signup", signUpRoute)
router.use("/login", loginRoute)

// user update
router.use("/send_phone_or_email_otp", sendUpdatePhoneOrEmailRoute)
router.use("/phone_or_email_update", updatePhoneOrEmailRoute)

// change password
router.use("/send_forgot_password_otp", sendForgetOTPRoute)
router.use("/change_password", passwordChangeRoute)

// change Name
router.use("/update_Name", updateNameRoute)

// address CRUD
router.use("/address", userAddress)

export { router as userRoute };


