import { Schema, model } from "mongoose"
import { IProfileconnection, IProfileMul } from "@src/interfaces"
import { profile } from "@src/models/Common"

const userProfileSchema = new Schema<IProfileMul>({
    userId: {
        type: String,
        required: true
    },
    userProfile: profile

})

const userProfileModel = model<IProfileMul>("userProfile", userProfileSchema)

const profileConnection = new Schema<IProfileconnection>({
    userId: {
        type: String,
        required: true,
    },
    connections: [
        {
            userIDs: {
                type: String,
                required: true,
            }
        }
    ]
});

const ProfileConnectionModel = model<IProfileconnection>("userConnections", profileConnection);

export { userProfileModel, ProfileConnectionModel }