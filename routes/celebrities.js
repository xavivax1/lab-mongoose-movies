'use strict';
const express = require('express');
const router = express.Router();
// const Movie = require('../models/celebrity.');

router.get('/celebrities/:id', async (req, res, next) => {
  try {
    const celebrities = await Celebrity.findById(id);
    res.render('celebrities/show', { celebrities });
  } catch (error) {
    next(error);
  }
});

router.post('/celebrities/new', async (req, res, next) => {
  const {_id, name, occupation, catchPhrase} = req.body;
  const celeb = { name, occupation, catchPhrase};
  try {
    await Celebrity.create(celeb);
    //const celebrities = await Celebrity.findById(id);
    //res.render('celebrities/new', { celebrities });
    res.redirect('/celebrities');
  } catch (error) {
    res.render('/celebrities/new')
    next(error);
  }
});

const movie = await Movie.findById(id);
console.log(movie);
res.render('detail', movie);

router.get('/', async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();
    res.render('movies', { celebrities });
  } catch (error) {
    next(error);
  }
});
