import Joi from "joi";
import { ISignUpLoginSchema } from "@src/interfaces";
import {required_String_NotEmpty} from "@src/validation_schema/commonFields"

const name =required_String_NotEmpty('name')

const phoneNumber = Joi.string()
// .length(10)
// .pattern(/[6-9]{1}[0-9]{9}/)
.messages({
  "string.empty": "Phone number cannot be empty.",
  // "string.length": "Phone number must be exactly 10 digits long.",
  // "string.pattern.base": "Phone number is invalid.",
})

const email = Joi.string().email().messages({
  "string.empty": "Email cannot be empty.",
  "string.email": "Invalid email format.",
})
const otp = Joi.string().length(4).required().messages({
  'any.required':"otp is required",
  'string.base': 'otp must be a string',
  'string.empty': `otp can't be empty`,
  'string.length': `OTP must be 4 digits`,
})
const otpID = Joi.string().allow("", null).messages({
  'string.base': 'otpID must be a string',
})




const password = Joi.string()
// .pattern(new RegExp("^[a-zA-Z0-9@]{3,30}$"))
.required()
.messages({
  'any.required': 'password is required',
  // "string.pattern.base":'Password must contain only letters, numbers, or "@" and be between 3 and 30 characters long.',
})
// Schema for sign-up validation
const validateSignUp = Joi.object({
  name,
  phoneNumber,
  email,
  password,
}).xor('phoneNumber', 'email').messages({
  'object.xor': 'Provide either Phone number or Email, but not both or neither',
});

// Schema for login validation
const validateLogin = Joi.object({
  phoneNumber,
  email,
  password,
}).xor('phoneNumber', 'email').messages({
  'object.xor': 'Provide either Phone number or Email, but not both or neither',
});

const validateSendOtp = Joi.object({
  phoneNumber,
  email,
}).xor('phoneNumber', 'email').messages({
  'object.xor': 'Provide either Phone number or Email, but not both or neither',
});
const validateVerifyOtp = Joi.object({
  phoneNumber,
  email,
  otp,
  otpID
}).xor('phoneNumber', 'email').messages({
  'object.xor': 'Provide either Phone number or Email, but not both or neither',
});



// for  password change
const validateChangePassword = Joi.object({
  phoneNumber,
  email,
  password,
}).xor('phoneNumber', 'email').messages({
  'object.xor': 'Provide either Phone number or Email, but not both or neither',
});


// Schema for sign-up validation
const validateEmailOrPhone = Joi.object({
  phoneNumber,
  email
}).xor('phoneNumber', 'email').messages({
  'object.xor': 'Provide either Phone number or Email, but not both or neither',
});

// Schema Name
const validateName = Joi.object({
name
})


export const SendOtpValidator: Joi.ObjectSchema<ISignUpLoginSchema> = validateSendOtp;
export const VerifyOtpValidator: Joi.ObjectSchema<ISignUpLoginSchema> = validateVerifyOtp;
/////////////
export const signUpValidator: Joi.ObjectSchema<ISignUpLoginSchema> = validateSignUp;
export const loginValidator: Joi.ObjectSchema<ISignUpLoginSchema> = validateLogin;
/////////////
export const updatePhoneOrEmailValidator: Joi.ObjectSchema<ISignUpLoginSchema> = validateEmailOrPhone;
export const ChangePasswordValidator: Joi.ObjectSchema<ISignUpLoginSchema> = validateChangePassword;
export const updateNameValidator: Joi.ObjectSchema<ISignUpLoginSchema> = validateName;
/////////////
