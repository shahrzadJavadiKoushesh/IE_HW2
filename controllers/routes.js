const permission = require("../middleware/permission.js");

express = require("express");
courseView = require("../views/courses.js");
userView = require("../views/users.js");
auth = require("../middleware/auth.js");
const router = express.Router();

router.post('/login', userView.login)

// IT Manager Routes
router.get('/admin/Professors',[auth, permission.isITManager], userView.getAllProfs);
router.get('/admin/Professor/:id',[auth,permission.isITManager], userView.getProfessorById);
router.delete('/admin/Professor/:id',[auth, permission.isITManager], userView.deleteProfById);
router.post('/admin/Professor',[auth, permission.isITManager] ,userView.createProfessor);
router.put('/admin/Professor/:id',[auth, permission.isITManager], userView.updateProfessor)

router.get('/admin/Students',[auth, permission.isITManager], userView.getAllStudents);
router.get('/admin/Student/:id',[auth, permission.isITManager], userView.getProfessorById);
router.delete('/admin/Student/:id',[auth, permission.isITManager], userView.deleteProfById);
router.post('/admin/Student',[auth, permission.isITManager], userView.createStudent);
router.put('/admin/Student/:id',[auth, permission.isITManager], userView.updateStudent)

router.get('/admin/managers',[auth, permission.isITManager] , userView.getAllEdManagers);
router.get('/admin/manager/:id',[auth, permission.isITManager] ,userView.getEdManagerById);
router.delete('/admin/manager/:id',[auth, permission.isITManager], userView.deleteEdManagerById);
router.post('/admin/manager',[auth, permission.isITManager] , userView.createEdManager);
router.put('/admin/manager/:id', [auth, permission.isITManager],  userView.updateEdManager)
// 
router.get('/course/:id',[auth, permission.isStudentOrProfessorOrEducationManager], courseView.getCourseById);
router.delete('/course/:id',[auth, permission.isEductaionManager], courseView.deleteCourseById);
router.post('/course',[auth, permission.isEductaionManager], courseView.createCourse);
router.put('/course/:id',[auth, permission.isEductaionManager], courseView.updateCourse);
router.get('/courses',[auth, permission.isStudentOrProfessorOrEducationManager], courseView.getAllCoursesFileterdBasedOnField);

router.get('/Students',[auth, permission.isEductaionManager], userView.getAllStudents);
router.get('/Student/:id',[auth, permission.isEductaionManager], userView.getProfessorById);
router.delete('/Student/:id',[auth, permission.isEductaionManager], userView.deleteProfById);
router.post('/Student',[auth, permission.isEductaionManager], userView.createStudent);
router.put('/Student/:id',[auth, permission.isStudent], userView.updateStudent)

router.get('/Professors',[auth, permission.isEductaionManager], userView.getAllProfs);
router.get('/Professor/:id',[auth,permission.isEductaionManager], userView.getProfessorById);
router.delete('/Professor/:id',[auth, permission.isEductaionManager], userView.deleteProfById);
router.put('/Professor/:id',[auth, permission.isProfessor], userView.updateProfessor);

module.exports = router