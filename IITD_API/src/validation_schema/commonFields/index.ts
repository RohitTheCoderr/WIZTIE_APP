import Joi from "joi"
function required_String_NotEmpty(fieldName: string) {
    return Joi.string().required().messages({
        'any.required': `${fieldName} is required`,
        'string.base': `${fieldName} must be a string`,
        'string.empty': `${fieldName} can't be empty`,
    });
}

// // Function to validate either a string (URL) or a file
function required_FileOrString(fieldName: string) {
    return Joi.alternatives()
        .try(Joi.string(), Joi.object().instance(File))
        .messages({
            'alternatives.match': `${fieldName} must be either a folder or a file`,
        });
}
 const userProjects=required_FileOrString("projets")

 const projets={
    userProjects
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

//  for userProfile data

const Gender = required_String_NotEmpty("Gender");
const DOB = required_String_NotEmpty("DOB");
const email = required_String_NotEmpty("email");
const Address = required_String_NotEmpty("address");
const city = required_String_NotEmpty("city");
const aboutMsg = required_String_NotEmpty("aboutMsg");
const education = required_String_NotEmpty("education");
const position = required_String_NotEmpty("position");
const service = required_String_NotEmpty("service");
const careerBreak = required_String_NotEmpty("careerBreak");
const skills = required_String_NotEmpty("skills");
// const profileImg = [required_FileOrString("profileImg")];
const profileImg = Joi.array().items(Joi.object({
    data: required_String_NotEmpty('data'),
    contentType: required_String_NotEmpty('contentType')
 
}))
const lindinProfileLink = required_String_NotEmpty("linkedinProfileLink");
const instagramProfileLink = required_String_NotEmpty("instagramProfileLink");

const userprofile = {
    fullName,
    Gender,
    DOB,
    email,
    PhoneNumber,
    Address,
    city,
    aboutMsg,
    education,
    position,
    service,
    skills,
    profileImg,
    careerBreak,
    lindinProfileLink,
    instagramProfileLink,
}


export { required_String_NotEmpty , address , userprofile,projets}