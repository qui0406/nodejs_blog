const express = require('express');
const router = express.Router();

const siteController = new require('../app/controllers/SiteController');

router.get('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;
