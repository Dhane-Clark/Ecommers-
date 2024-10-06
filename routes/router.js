const express = require('express');
const router = express.Router();
const dc = require('../controller/controlerss');

router.get('/', dc.main);
router.get('/bestseller', dc.bseller);
router.get('/addProf', dc.addprof);
router.get('/Fashion', dc.fs);
router.get('/index', dc.home);
router.get('/Jewellry', dc.js);
router.get('/Shoes', dc.sh);
router.get('/cart', dc.cr);
router.get('/Profile', dc.pr);




module.exports = router;
