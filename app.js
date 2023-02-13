const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const db = require('./database');

const PORT = 3000;

const app = express();
const server = require('http').createServer(app);
server.listen(PORT, () => console.log(`Ascolto su porta ${PORT}`));

mongoose.connect(
  db.DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err) => {
    if (err) {
      console.log('Errore di connessione', err);
    } else {
      console.log('Connessione riuscita!');
    }
  }
);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  next();
});
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());
app.use(cors());

var Recensione = mongoose.model('Recensione', {
  titolo: String,
  descrizione: String,
  rating: Number
});

app.get('/recensione', function (req, res) {
  Recensione.find(function (err, recensione) {
    if (err) res.send(err);

    res.json(recensione);
  });
});

app.post('/recensione', function (req, res) {
  Recensione.create(
    {
      titolo: req.body.titolo,
      descrizione: req.body.descrizione,
      rating: req.body.rating,
      done: false
    },
    function (err, recensione) {
      if (err) res.send(err);

      Recensione.find(function (err, recensione) {
        if (err) res.send(err);
        res.json(recensione);
      });
    }
  );
});

app.delete('/recensione/:recensione_id', function (req, res) {
  Recensione.findByIdAndRemove(
    {
      _id: req.params.recensione_id
    },
    function (err, recensione) {
      if (err) res.send(err);

      Recensione.find(function (err, recensione) {
        if (err) res.send(err);
        res.json(recensione);
      });
    }
  );
});
