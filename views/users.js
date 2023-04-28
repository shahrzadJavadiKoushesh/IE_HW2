const usersModels = require("../models/users.js");

async function getAllProfs(req, res){
    const professors = await usersModels.Professor.find({})
    res.status(200).send(professors)
}

async function getProfessorById(req, res){
    id = req.params.id
    if (id == undefined){
        res.status(400).send("sending id is required to get")
        return
    }
    const professor = await usersModels.User.findById(id)
    res.status(200).send(professor)
}

async function deleteProfById(req, res){
    id = req.params.id
    if (id == undefined){
        res.status(400).send("sending id is required to delete")
        return
    }
    const professor = await usersModels.User.findByIdAndDelete(id)
    res.status(200).json({
        message: "professor deleted"
    })
}

async function createUser(req, res) {
    const userType = req.body.userType
    let userModel = null;
    switch(userType) {
        case "student": 
            userModel = usersModels.Student
        break;
        case "professor":
            userModel = usersModels.Professor
        break;
        case "education_manager":
            userModel = usersModels.EducationManager
        break;
        case "IT_manager":
            userModel = usersModels.ITManager
        break;
        default:
            res.status(400).json({
                message: "sending user type is required."
            })
    }
    try{
        const professor = await userModel.create(req.body)
        console.log("here")
        res.status(201).json({
            message: "professor successfully created.",
            professor: professor,
        })
    } catch (err) {
        res.status(500).json({message: "an error occured in saving professor"})
    }
}

async function updateProfessor(req, res){
    id = req.params.id
    id = req.params.id
    if (id == undefined){
        res.status(400).send("sending id is required to update")
        return
    }
    console.log(req.body)
    const professor = await usersModels.User.findOneAndUpdate(id)
    console.log(professor)
    res.status(200).json({
        message: "professor updated"
    })
}

module.exports = {
    getAllProfs: getAllProfs,
    getProfessorById: getProfessorById,
    deleteProfById: deleteProfById,
    createUser: createUser,
    updateProfessor: updateProfessor
}