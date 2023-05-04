require("../models/users")
require("../models/courses")

function isStudentOrProfessorOrEducationManager(req, res, next){
    if (req.user.userType == "student" || req.user.userType == "education_manager" || req.user.userType == "professor"){
        return next();
    }
    res.status(403).json({
        message: "permission denied"
    })
}

function isEductaionManager(req, res, next){
    console.log(req.user.userType)
    if (req.user.userType == "education_manager"){
        return next();
    }
    res.status(403).json({
        message: "permission denied"
    })
}



module.exports = ({
    isStudentOrProfessorOrEducationManager,
    isEductaionManager,
});