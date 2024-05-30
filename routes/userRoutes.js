var express = require('express');
var router = express.Router();
const {
    homepageRoute
} = require('../controller/userControllers');

/**
 * @route POST /users
 * @desc Test Home Route
 * @access Public
 */




router.post('/', homepageRoute);

module.exports = router;