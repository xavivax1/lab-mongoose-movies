'use strict';

const express = require('express');
const router = express.Router();

/* GET home page. */

router.get('/celebrities', (req, res, next) => {
  res.render('./views/celebrities/index', { title: 'Celebrities' });
});

// router.get('/index', (req, res, next) => {
//   res.render('index', { title: 'Celebrities' });
// });
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
