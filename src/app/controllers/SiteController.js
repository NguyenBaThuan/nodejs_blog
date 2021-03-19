const Course = require('../models/Course');
const { mutipleMonogooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /Home
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                // convert sang obj literal

                res.render('home', {
                    courses: mutipleMonogooseToObject(courses),
                });
            })
            .catch(next);
    }

    //[GET] /Search
    Search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
