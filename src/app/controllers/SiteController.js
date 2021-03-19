const Course = require('../models/Course');

class SiteController {
    // [GET] /Home
    index(req, res) {
        Course.find({}, function (err, courses) {
            if (!err) {
                res.json(courses);
            } else {
                res.status(400).json({ error: 'ERROR' });
            }
        });
        // res.render('home');
    }

    //[GET] /Search
    Search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
