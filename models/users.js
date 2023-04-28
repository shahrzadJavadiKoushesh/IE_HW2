const mongoose = require("mongoose");

const user = mongoose.model(
    'user',
    mongoose.Schema({
        name: String,
        userId: String,
        password: String,
        email: String,
        phoneNumber: Number,
    })
);

const student = user.discriminator(
    "student",
    mongoose.Schema({
        section: String,
        year: Number,
        term: String,
        avg: Number,
        faculty: String,
        subject: String,
    })
);

const professor = user.discriminator(
    "professor",
    mongoose.Schema({
        faculty: String,
        subject: String,
        credit: String,
    })
);

const educationMmanager = user.discriminator(
    "education_manager",
    mongoose.Schema({
        faculty: String,
    })
);

const ITManager = user.discriminator(
    "IT_manager",
    mongoose.Schema({})
);

module.exports = {
    User: user,
    Student: student,
    Professor: professor,
    EducationManager: educationMmanager,
    ITManager: ITManager,   
}