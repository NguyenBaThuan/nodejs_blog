class SiteController {
    // [GET] /Home
    index(req, res) {
        res.render('home');
    }

    //[GET] /Search
    Search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
