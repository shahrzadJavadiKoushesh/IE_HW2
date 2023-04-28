express = require("express");
courseView = require("../views/courses.js");
userView = require("../views/users.js")
const router = express.Router();

router.get('/courses', courseView.getAllCourses);
router.get('/course/:id', courseView.getCourseById);
router.delete('/course/:id', courseView.deleteCourseById);
router.post('/course', courseView.createCourse);
router.put('/course/:id', courseView.updateCourse);

router.get('/admin/Professors',  userView.getAllProfs);
router.get('/admin/Professor/:id', userView.getProfessorById);
router.delete('/admin/Professor/:id', userView.deleteProfById);
router.post('/admin/Professor', userView.createUser);
router.put('/admin/Professor/:id', userView.updateProfessor)

module.exports = router