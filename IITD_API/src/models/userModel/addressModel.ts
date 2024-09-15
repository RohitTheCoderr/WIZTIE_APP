import { Schema, model } from "mongoose"
import { IAddressMul } from "@src/interfaces"
import {address} from "@src/models/Common"

const addressSchema = new Schema<IAddressMul>({
    userId: {
        type: String,
        required: true
    },
    address:address

})

const addressModel = model<IAddressMul>("address", addressSchema)

export { addressModel }