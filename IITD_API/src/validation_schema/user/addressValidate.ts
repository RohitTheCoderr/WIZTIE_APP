import Joi from "joi"
import { IAddress, IAddressWhileUpdate } from "@src/interfaces"
import { required_String_NotEmpty, address } from "@src/validation_schema/commonFields"

const addressId = required_String_NotEmpty("addressId");

const validateAddress = Joi.object(address)

const validateAddresswhileUpdate = Joi.object({ ...address, addressId })

export const addressValidator: Joi.ObjectSchema<IAddress> = validateAddress;
export const addressWhileUpdateValidator: Joi.ObjectSchema<IAddressWhileUpdate> = validateAddresswhileUpdate;