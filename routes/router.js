const express = require('express');
const router = express.Router();
const hp = require('../controller/controlerss');
const m = require('../controller/controlerss');
router.get('/nom', hp.nom);

module.exports = router;
