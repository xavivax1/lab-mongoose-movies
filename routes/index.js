'use strict';

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/celebrities', (req, res, next) => {
  res.render('../view/celebrities/index', { title: 'Celebrities' });
});

module.exports = router;
