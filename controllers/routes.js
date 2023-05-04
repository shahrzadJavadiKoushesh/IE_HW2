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
router.get('/admin/Professor/:id',auth, userView.getProfessorById);
router.delete('/admin/Professor/:id',auth, userView.deleteProfById);
router.post('/admin/Professor',auth ,userView.createUser);
router.put('/admin/Professor/:id',auth, userView.updateProfessor)

router.get('/admin/Students',auth,  userView.getAllProfs);
router.get('/admin/Student/:id',auth, userView.getProfessorById);
router.delete('/admin/Student/:id',auth, userView.deleteProfById);
router.post('/admin/Student',auth, userView.createUser);
router.put('/admin/Student/:id',auth, userView.updateStudent)

router.get('/admin/managers',auth , userView.getAllEdManagers);
router.get('/admin/manager/:id',auth ,userView.getEdManagerById);
router.delete('/admin/manager/:id',auth, userView.deleteEdManagerById);
router.post('/admin/manager',auth , userView.createUser);
router.put('/admin/manager/:id', auth,  userView.updateEdManager)

module.exports = router