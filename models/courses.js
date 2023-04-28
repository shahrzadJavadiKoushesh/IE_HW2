const mongoose = require("mongoose");

const baseCourse = mongoose.model(
    'course',
    mongoose.Schema({
        name: String,
        prerequisite: [String],
        corerequisite: [String],
        units: Number,
        field: String,
    })
);

const approvedCourse = baseCourse.discriminator(
    "approved_course",
    mongoose.Schema({})
)

const semesterCourse = baseCourse.discriminator(
    "semester_course",
    mongoose.Schema({
        classDate: String,
        examDate: String,
        examPlace: String,
        professor: String,
        capaticy: Number,
        semester: String,
    })
)

module.exports = {
    Course: baseCourse,
    ApprovedCourse: approvedCourse,
    SemesterCourse: semesterCourse,
}