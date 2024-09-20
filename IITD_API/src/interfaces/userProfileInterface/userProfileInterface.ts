
export interface IProfile {
    fullName: string;
    Gender:string;
    DOB:string;
    email:string;
    PhoneNumber: string
    Address:string;
    city: string;
    aboutMsg:string;
    education:string;
    position:string;
    service:string;
    careerBreak:string;
    skills:string;
    profileImg:{data:string, contentType:string}[];
    lindinProfileLink:string
    instagramProfileLink:string
}

export interface IProfileWhileUpdate extends IProfile {
    profileId: string
}

export interface IProfileMul {
    userId: string
    userProfile: IProfile[]
}

