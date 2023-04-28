express = require("express");
courseView = require("../views/courses.js");
const router = express.Router();

router.get('/courses', courseView.getAllCourses);
router.get('/course/:id', courseView.getCourseById);
router.delete('/course/:id', courseView.deleteCourseById);
router.post('/course', courseView.createCourse);
router.put('/course/:id', courseView.updateCourse);

module.exports = router