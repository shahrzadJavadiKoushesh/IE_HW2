const usersModels = require("../models/users.js");
const jwt = require("jsonwebtoken");

async function login(req, res) {
    try {
        const { email, password, __t } = req.body;
        console.log(email)
        console.log(password)
        console.log(__t)
        //Validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }

        const user = await usersModels.User.findOne({ email });

        console.log(user);
        if (user && ((password == user.password))) {
            // Create token
            const token = jwt.sign(
                { user_id: user._id, email: user.email, userType: user.__t },
                    "config.TOKEN_KEY",
                {
                    expiresIn: "2h",
                }
            );

            user.token = token;

            res.status(200).json({token: token});
            return
        }

        res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }
}
async function getAllProfs(req, res) {
    const professors = await usersModels.Professor.find({})
    res.status(200).send(professors)
}

async function getProfessorById(req, res) {
    id = req.params.id
    if (id == undefined) {
        res.status(400).send("sending id is required to get")
        return
    }
    const professor = await usersModels.User.findById(id)
    res.status(200).send(professor)
}

async function deleteProfById(req, res) {
    id = req.params.id
    if (id == undefined) {
        res.status(400).send("sending id is required to delete")
        return
    }
    const professor = await usersModels.User.findByIdAndDelete(id)
    res.status(200).json({
        message: "professor deleted"
    })
}

async function createProfessor(req, res) {
    let userModel = null;
    userModel = usersModels.Professor
    try {
        const professor = await userModel.create(req.body)
        // console.log("here")
        res.status(201).json({
            message: "professor successfully created.",
            professor: professor,
        })
    } catch (err) {
        res.status(500).json({ message: "an error occured in saving professor" })
    }
}

async function updateProfessor(req, res) {
    id = req.params.id
    id = req.params.id
    if (id == undefined) {
        res.status(400).send("sending id is required to update")
        return
    }
    console.log(req.body)
    //professor can update itself
    if (req.user.user_id != req.params.id){
        res.status(400).send("Each professor can only update itself");
        return
    }
    const professor = await usersModels.User.findOneAndUpdate(id)
    console.log(professor)
    res.status(200).json({
        message: "professor updated"
    })
}

async function getAllStudents(req, res) {
    const students = await usersModels.User.find({})
    res.status(200).send(students)
}

async function getStudentById(req, res) {
    id = req.params.id
    if (id == undefined) {
        res.status(400).send("sending id is required to get")
        return
    }
    const student = await usersModels.User.findById(id)
    res.status(200).send(student)
}

async function deleteStudentById(req, res) {
    id = req.params.id
    if (id == undefined) {
        res.status(400).send("sending id is required to delete")
        return
    }
    const student = await usersModels.User.findByIdAndDelete(id)
    res.status(200).json({
        message: "student deleted"
    })
}

async function createStudent(req, res) {
    let userModel = null;
    userModel = usersModels.Student
    try {
        const student = await userModel.create(req.body)
        // console.log("here")
        res.status(201).json({
            message: "Student successfully created.",
            student: student,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "an error occured in saving student" })
    }
}

async function updateStudent(req, res) {
    id = req.params.id
    if (id == undefined) {
        res.status(400).send("sending id is required to update")
        return
    }
    console.log(req.body)
    //student can update itself
    if (req.user.user_id != req.params.id){
        res.status(400).send("Each student can only update itself");
        return
    }

    const student = await usersModels.User.findOneAndUpdate(id)
    console.log(student)
    res.status(200).json({
        message: "student updated"
    })
}

async function getAllEdManagers(req, res) {
    const managers = await usersModels.EducationManager.find({})
    res.status(200).send(managers)
}

async function getEdManagerById(req, res) {
    id = req.params.id
    if (id == undefined) {
        res.status(400).send("sending id is required to get")
        return
    }
    const EdManager = await usersModels.User.findById(id)
    res.status(200).send(EdManager)
}

async function deleteEdManagerById(req, res) {
    id = req.params.id
    if (id == undefined) {
        res.status(400).send("sending id is required to delete")
        return
    }
    const EdManager = await usersModels.User.findByIdAndDelete(id)
    res.status(200).json({
        message: "EdManager deleted"
    })
}

async function createEdManager(req, res) {
    let userModel = null;
    userModel = usersModels.EducationManager
    try {
        const EdManager = await userModel.create(req.body)
        // console.log("here")
        res.status(201).json({
            message: "Education Manager successfully created.",
            EdManager: EdManager,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "an error occured in saving Education Manager" })
    }
}

async function updateEdManager(req, res) {
    id = req.params.id
    if (id == undefined) {
        res.status(400).send("sending id is required to update")
        return
    }
    console.log(req.body)
    const EdManager = await usersModels.User.findOneAndUpdate(id)
    console.log(EdManager)
    res.status(200).json({
        message: "EdManager updated"
    })
}
module.exports = {
    login: login,
    getAllProfs: getAllProfs,
    getProfessorById: getProfessorById,
    deleteProfById: deleteProfById,
    createProfessor: createProfessor,
    updateProfessor: updateProfessor,
    getAllStudents: getAllStudents,
    getStudentById: getStudentById,
    deleteStudentById: deleteStudentById,
    createStudent: createStudent,
    updateStudent: updateStudent,
    getAllEdManagers: getAllEdManagers,
    getEdManagerById: getEdManagerById,
    deleteEdManagerById: deleteEdManagerById,
    createEdManager: createEdManager,
    updateEdManager: updateEdManager
}