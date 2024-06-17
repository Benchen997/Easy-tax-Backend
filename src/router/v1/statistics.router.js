//file was created at: 2024/6/17
//file is under project: backend
//Author: Tianjia Chen
//E-mail: benchentravail2024@gmail.com
const express = require('express');
const router = express.Router();
const { getStatistics } = require('../../controller/statistics.controller');

// Define the route for statistics
router.get('/', getStatistics);

module.exports = router;

