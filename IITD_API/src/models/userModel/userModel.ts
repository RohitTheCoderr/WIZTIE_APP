import { Schema, model } from 'mongoose';

import {IUser} from "@src/interfaces"

const userSchema = new Schema<IUser>({
    name:{type:"string",required:true},
    password: { type: "string", required: true, select: false },
    phoneNumber: { type: "string" },
    email: { type: "string" },
})

export const UserModel = model<IUser>("user", userSchema, "users")