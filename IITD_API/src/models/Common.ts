export const address = [{
    fullName: {
        type: String,
        required: true
    },
    streetName: {
        type: String,
    },
    aprtmentOrFloor: {
        type: String,
        required: true
    },
    townOrCity: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: String,
        required: true
    },
}]


export const profile = [{
    fullName: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    DOB: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    aboutMsg: {
        type: String,
    },
    education: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    service: {
        type: String,
    },
    careerBreak: {
        type: String,
    },
    skills: {
        type: String,
        required: true
    },
    profileImg: [{data:String, contentType:String}],

    lindinProfileLink: {
        type: String,
    },
    instagramProfileLink: {
        type: String,
    }
}]
