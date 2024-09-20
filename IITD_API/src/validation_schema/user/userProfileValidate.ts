import Joi from "joi"
import { required_String_NotEmpty, userprofile } from "@src/validation_schema/commonFields"
import { IProfile, IProfileWhileUpdate } from "@src/interfaces";

const profileId = required_String_NotEmpty("profileId");

const validateUserProfile = Joi.object(userprofile)

const validateProfilewhileUpdate = Joi.object({ ...userprofile, profileId })

export const userProfileValidator: Joi.ObjectSchema<IProfile> = validateUserProfile;
export const profileWhileUpdateValidator: Joi.ObjectSchema<IProfileWhileUpdate> = validateProfilewhileUpdate;