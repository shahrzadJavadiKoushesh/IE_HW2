const courseModels = require("../models/courses.js");
const userModels = require("../models/users.js");

async function getAllCourses(req, res) {
    const courses = await courseModels.Course.find({})
    res.status(200).send(courses)
}

async function getAllCoursesFileterdBasedOnField(req, res){
    field = req.params.field
    user = userModels.User.findById(req.user.id)
    filters = {}
    if (user.__t == "student"){
        filters.faculty = user.faculty;
    }
    if (field != undefined){
        filters.field = field;
    }
    const courses = await courseModels.Course.find(filters)
    res.status(200).send(courses)
}   

async function getCourseById(req, res) {
    id = req.params.id
    if (id == undefined){
        res.status(400).send("sending id is required to get")
        return
    }
    const course = await courseModels.Course.findById(id)
    if (!course) {
    	res.status(404).send("course not found")
    	return
    }
    res.status(200).send(course)
}

async function deleteCourseById(req, res) {
    id = req.params.id
    if (id == undefined){
        res.status(400).send("sending id is required to delete")
        return
    }
    const course = await courseModels.Course.findByIdAndDelete(id)
    console.log(course)
    if (!course) {
    	res.status(404).send("course not found")
    	return
    }
    res.status(200).json({
        message: "course deleted."
    })
}

async function createCourse(req, res) {
    const courseType = req.body.courseType
    let courseModel = null;
    switch(courseType) {
        case "approved_course": 
            courseModel = courseModels.ApprovedCourse
        break;
        case "semester_course":
            courseModel = courseModels.SemesterCourse
        break;
        default:
            res.status(400).json({
                message: "sending course type is required."
            })
    }
    try{
        const course = await courseModel.create(req.body)
        console.log("here")
        res.status(201).json({
            message: "course successfully created.",
            course: course,
        })
    } catch (err) {
        res.status(500).json({message: "an error occured in saving course"})
    }
}

async function updateCourse(req, res) {
    id = req.params.id
    if (id == undefined){
        res.status(400).send("sending id is required to update")
        return
    }
    console.log(req.body)
    const course = await courseModels.Course.findByIdAndUpdate(id, req.body)
    if (!course) {
    	res.status(404).send("course not found")
    	return
    }
    console.log(course)
    res.status(200).json({
        messaage: "course updated"
    })
}

module.exports = {
    getAllCourses: getAllCourses,
    getCourseById: getCourseById,
    deleteCourseById: deleteCourseById,
    createCourse: createCourse,
    updateCourse: updateCourse,
    getAllCoursesFileterdBasedOnField: getAllCoursesFileterdBasedOnField
}