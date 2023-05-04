express = require("express");
courseView = require("../views/courses.js");
userView = require("../views/users.js");
auth = require("../middleware/auth.js");
persmission = require("../middleware/permission.js");
const router = express.Router();
router.post('/login', userView.login)

router.get('/courses',[auth, persmission.isStudentOrProfessorOrEducationManager], courseView.getAllCourses);
router.get('/course/:id',[auth, persmission.isStudentOrProfessorOrEducationManager], courseView.getCourseById);
router.delete('/course/:id',[auth, persmission.isEductaionManager], courseView.deleteCourseById);
router.post('/course',[auth, persmission.isEductaionManager], courseView.createCourse);
router.put('/course/:id',[auth, persmission.isEductaionManager], courseView.updateCourse);

router.get('/admin/Professors',[auth], userView.getAllProfs);
router.get('/admin/Professor/:id',[auth], userView.getProfessorById);
router.delete('/admin/Professor/:id',[auth], userView.deleteProfById);
router.post('/admin/Professor',[auth] ,userView.createProfessor);
router.put('/admin/Professor/:id',[auth], userView.updateProfessor)

router.get('/admin/Students',[auth], userView.getAllStudents);
router.get('/admin/Student/:id',[auth], userView.getProfessorById);
router.delete('/admin/Student/:id',[auth], userView.deleteProfById);
router.post('/admin/Student',[auth], userView.createStudent);
router.put('/admin/Student/:id',[auth], userView.updateStudent)

router.get('/admin/managers',[auth] , userView.getAllEdManagers);
router.get('/admin/manager/:id',[auth] ,userView.getEdManagerById);
router.delete('/admin/manager/:id',[auth], userView.deleteEdManagerById);
router.post('/admin/manager',[auth] , userView.createEdManager);
router.put('/admin/manager/:id', [auth],  userView.updateEdManager)

module.exports = router