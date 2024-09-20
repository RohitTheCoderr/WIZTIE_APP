import express from "express";
import { userRoute } from "@src/routes/userRoutes/userRoute"


// router
const router = express.Router();


///////////////// user /////////////////
router.use("/user", userRoute)


export { router as AllMainRoutes };