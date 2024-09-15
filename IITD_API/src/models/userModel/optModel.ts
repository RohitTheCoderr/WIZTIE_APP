import { Date, Schema, model } from 'mongoose';


const otpSchema = new Schema<{ mailOtp: string, email: string,expiresAt:Date }>({
    email: { type: "string" },
    mailOtp: { type: "string" },
    expiresAt: { type: Date, required: true }
})

otpSchema.index({ "expiresAt": 1 }, { expireAfterSeconds: 1 })


export const otpModel = model("otp", otpSchema)