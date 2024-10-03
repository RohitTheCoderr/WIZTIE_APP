import Joi from "joi";
import { required_String_NotEmpty } from "@src/validation_schema/commonFields";  // Assuming this validates required non-empty strings
import { IProfileconnection } from "@src/interfaces";  // Assuming this contains your ProfileConnection interface

// Validate userId
const userId = required_String_NotEmpty("userId");

// Validate individual connection object (an object with a required userIDs field)
const connectionSchema = Joi.object({
    userIDs: required_String_NotEmpty("userIDs"),
});

// Validate connections array (an array of connectionSchema objects)
const connections = Joi.array().items(connectionSchema).min(1).required();

// Final ProfileConnection validation schema
const validateProfileConnection = Joi.object({
    userId,
    connections,
});

export const profileConnectionValidator: Joi.ObjectSchema<IProfileconnection> = validateProfileConnection;
