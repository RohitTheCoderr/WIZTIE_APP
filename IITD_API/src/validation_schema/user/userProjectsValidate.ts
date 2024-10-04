import Joi from "joi";
import { IProjects } from "@src/interfaces";

// Validation for the array of files (userProjects) within a project
const projectDetailsSchema = Joi.object({
    projectName: Joi.string().required().messages({
        'string.empty': 'Project name is required'
    }),
    userProjects: Joi.array().items(Joi.object().instance(File)).required().messages({
        'array.base': 'userProjects must be an array of files',
        'any.required': 'At least one file is required'
    }),
    category: Joi.string().required().messages({
        'string.empty': 'Category is required'
    }),
    technology: Joi.string().required().messages({
        'string.empty': 'Technology is required'
    }),
    description: Joi.string().required().messages({
        'string.empty': 'Description is required'
    })
});

// Validation for the overall user projects object
const validateUserProjects = Joi.object({
    userId: Joi.string().required().messages({
        'string.empty': 'User ID is required'
    }),
    userProjects: Joi.array().items(projectDetailsSchema).required().messages({
        'array.base': 'userProjects must be an array of project details',
        'any.required': 'At least one project is required'
    })
});

export const userProjectsValidator: Joi.ObjectSchema<IProjects> = validateUserProjects;
