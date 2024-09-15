import Joi from "joi"
function required_String_NotEmpty(fieldName: string) {
    return Joi.string().required().messages({
        'any.required': `${fieldName} is required`,
        'string.base': `${fieldName} must be a string`,
        'string.empty': `${fieldName} can't be empty`,
    });
}

const fullName = required_String_NotEmpty("fullName");
const streetName = required_String_NotEmpty("streetName");
const aprtmentOrFloor = required_String_NotEmpty("aprtmentOrFloor");
const townOrCity = required_String_NotEmpty("townOrCity");
const PhoneNumber = required_String_NotEmpty("PhoneNumber");

const address = {
    fullName,
    streetName,
    aprtmentOrFloor,
    townOrCity,
    PhoneNumber,
}

export { required_String_NotEmpty, address }