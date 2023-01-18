const express = require('express')
const mongodb = require('mongodb')

const app = express()

const db = require('./database')

const PORT = 3000

const mdbClient = mongodb.MongoClient

mdbClient.connect(db.DB, function (err, db) {
  if (err) {
    console.log('Error occurred while connecting to database.')
  } else {
    console.log('Database successfully connected!!')
  }
})

app.get('/', function (req, res) {
  res.json({ name: 'John Doe' })
})

app.listen(PORT, function () {
  console.log('Node app connected on:', PORT)
})