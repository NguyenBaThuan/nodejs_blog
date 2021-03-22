const Course = require('../models/Course');
const { mutipleMonogooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] me/stored/courses/
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then((
                [course, deleteCount], // distructuring
            ) =>
                res.render('me/stored-courses', {
                    deleteCount,
                    course: mutipleMonogooseToObject(course),
                }),
            )
            .catch(next);
    }

    // [GET] me/trash/courses/
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((course) =>
                res.render('me/trash-courses', {
                    course: mutipleMonogooseToObject(course),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
