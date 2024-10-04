import { Schema, model } from "mongoose";
import { IProjects } from "@src/interfaces";

// Define the schema for each individual project (IDetails)
const projectDetailsSchema = new Schema({
    projectName: {
        type: String,
        required: true
    },
    userProjects: [
        {
            type: String, // You will store the path or name of the file here (e.g., after uploading to a server or cloud)
            required: true
        }
    ],
    category: {
        type: String,
        required: true
    },
    technology: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

// Define the schema for user projects (IProjects)
const userProjectsSchema = new Schema<IProjects>({
    userId: {
        type: String,
        required: true
    },
    userProjects: [projectDetailsSchema] // Array of project details
});

const userProjectsModel = model<IProjects>("userProjects", userProjectsSchema);

export { userProjectsModel };
