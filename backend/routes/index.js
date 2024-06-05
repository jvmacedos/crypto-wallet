const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

transactionController(router);

module.exports = router;
