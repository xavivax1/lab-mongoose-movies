'use strict';

const Ceblebrity = require('../models/celebrity');
const mongoose = require('mongoose');

const celebrities = [
  {
    name: 'Stallone',
    occupation: 'celebrity',
    catchPhrase: 'I can.t feel my legs!'
  },
  {
    name: 'Sinatra',
    occupation: 'singer & dancer',
    catchPhrase: 'I did it my way'
  },
  {
    name: 'Harpo Marx',
    occupation: 'comedian',
    catchPhrase: 'moc moc'
  }
];

// const app = express();

mongoose.connect('mongodb://localhost/celebrities', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

Ceblebrity.insertMany(celebrities)
  .then(result => {
    console.log(result);
    mongoose.connection.close();
  })
  .catch(error => {
    console.log(error);
  });
