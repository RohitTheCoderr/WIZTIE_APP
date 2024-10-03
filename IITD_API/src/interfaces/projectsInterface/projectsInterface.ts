// Interface representing details for each individual project
export interface IDetails {
    projectName: string;      // Name of the project
    userProjects: File[];     // Array of files uploaded for the project
    category: string;         // Category of the project
    technology: string;       // Technology used in the project
    description: string;      // Description of the project
}

// Interface representing user projects
export interface IProjects {
    userId: string;           // ID of the user
    userProjects: IDetails[]; // Array of projects the user has submitted
}
