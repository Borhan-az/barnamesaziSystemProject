const express = require('express');
const router = express.Router();

const handleRoot = require('./root');
const handlePostLogin = require('./postLogin');
const handleGetLogin = require('./getLogin');
const handleLogout = require('./logout');

const handleDashboard = require('./dashboard/dashboard');
const handleGetUser = require('./dashboard/user/userGet');

router.get('/', (req, res, next) => {
    handleRoot(req, res);
});

router.get('/login', (req, res, next) => {
    handleGetLogin(req, res);
});

router.post('/login', (req, res, next) => {
    handlePostLogin(req, res);
});

router.get('/logout', (req, res, next) => {
    handleLogout(req, res);
});

router.get('/dashboard', (req, res, next) => {
    handleDashboard(req, res);
});

router.get('/dashboard/user', (req, res, next) => {
    handleGetUser(req, res);
});

module.exports = router;
