express = require("express");
courseView = require("../views/courses.js");
userView = require("../views/users.js");
auth = require("../middleware/auth.js");
const router = express.Router();
router.post('/login', userView.login)

router.get('/courses', courseView.getAllCourses);
router.get('/course/:id', courseView.getCourseById);
router.delete('/course/:id', courseView.deleteCourseById);
router.post('/course', courseView.createCourse);
router.put('/course/:id', courseView.updateCourse);

router.get('/admin/Professors',auth, userView.getAllProfs);
router.get('/admin/Professor/:id', userView.getProfessorById);
router.delete('/admin/Professor/:id', userView.deleteProfById);
router.post('/admin/Professor', userView.createUser);
router.put('/admin/Professor/:id', userView.updateProfessor)

router.get('/admin/Students',  userView.getAllProfs);
router.get('/admin/Student/:id', userView.getProfessorById);
router.delete('/admin/Student/:id', userView.deleteProfById);
router.post('/admin/Student', userView.createUser);
router.put('/admin/Student/:id', userView.updateStudent)

router.get('/admin/managers',  userView.getAllEdManagers);
router.get('/admin/manager/:id', userView.getEdManagerById);
router.delete('/admin/manager/:id', userView.deleteEdManagerById);
router.post('/admin/manager', userView.createUser);
router.put('/admin/manager/:id', userView.updateEdManager)

module.exports = router