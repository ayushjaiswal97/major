const user = require('../model/userSchema');


/**POST /user homepage controller */
exports.homepageRoute = (req, res, next) => {
    res.status(200).json({message: 'hello from Sheryiskill!'});
};