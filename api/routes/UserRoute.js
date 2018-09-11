const express = require('express');
const UserController = require('../controllers/UserController');
const routeHelper = require('../helper/routeHelper');

const Router = express.Router();

Router.route('/signup')
    .post(routeHelper.validateAuth, UserController.signUp);

module.exports = Router;