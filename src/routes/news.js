const express = require('express');
const router = express.Router();

const newsController= new require('../app/controllers/NewsController');

router.get('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;