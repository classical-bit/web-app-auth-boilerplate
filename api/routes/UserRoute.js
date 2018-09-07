const UserController = require('../controllers/UserController');
const router = require('express-promise-router')();

router.route('/signup')
    .post(UserController.signUp);
router.route('/signin')
    .post(UserController.signIn);

module.exports = router;