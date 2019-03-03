'use strict';
const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/celebrities/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const celebrities = await Celebrity.findById(id);
    res.render('celebrities/show', { celebrities });
  } catch (error) {
    next(error);
  }
});

router.post('/celebrities/new', async (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const celeb = { name, occupation, catchPhrase };
  try {
    await Celebrity.create(celeb);
    res.redirect('/celebrities');
  } catch (error) {
    res.render('/celebrities/new');
    next(error);
  }
});

router.post('/celebrities/:id/delete', async (req, res, next) => {
  const { _id } = req.body;
  // const celeb = { name, occupation, catchPhrase };
  try {
    await Celebrity.findByIdanDelete(_id);
    res.redirect('/celebrities');
  } catch (error) {
    next(error);
  }
});

router.get('/celebrities', async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();
    res.render('movies', { celebrities });
  } catch (error) {
    next(error);
  }
});
