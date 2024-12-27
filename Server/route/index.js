const express = require('express')
const router= express.Router();

const {
    signup,
    login,
} = require('../controller/Auth');

router.post('/sign-up',signup);
router.post('/sign-in',login)

module.exports = router;