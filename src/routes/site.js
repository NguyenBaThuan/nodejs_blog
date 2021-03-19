const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');
// new NewsController.index

router.get('/search', siteController.Search);

router.get('/', siteController.index);
module.exports = router;
