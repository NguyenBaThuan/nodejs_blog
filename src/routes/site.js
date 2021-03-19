const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController')
    // new NewsController.index


router.use('/search', siteController.Search);

router.use('/', siteController.index);
module.exports = router;