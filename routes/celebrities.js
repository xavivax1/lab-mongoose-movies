'use strict';
const express = require('express');
const router = express.Router();
// const Movie = require('../models/celebrity.');

router.get('/movies', async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.render('movies', { movies });
  } catch (error) {
    next(error);
  }
});
