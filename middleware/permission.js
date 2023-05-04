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

function isProfessor(req, res, next){
    console.log(req.user.userType)
    if (req.user.userType == "professor"){
        return next();
    }
    res.status(403).json({
        message: "permission denied"
    })
}

function isStudent(req, res, next){
    console.log(req.user.userType)
    if (req.user.userType == "student"){
        return next();
    }
    res.status(403).json({
        message: "permission denied"
    })
}

function isITManager(req, res, next){
    console.log(req.user.userType)
    if (req.user.userType == "IT_manager"){
        return next();
    }
    res.status(403).json({
        message: "permission denied"
    })
}


module.exports = ({
    isStudentOrProfessorOrEducationManager,
    isEductaionManager,
    isProfessor,
    isStudent,
    isITManager,
});