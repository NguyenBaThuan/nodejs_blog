const Course = require('../models/Course');
const { mutipleMonogooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] me/stored/courses/
    storedCourses(req, res, next) {
        Course.find({})
            .then((course) =>
                res.render('me/stored-courses', {
                    course: mutipleMonogooseToObject(course),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
