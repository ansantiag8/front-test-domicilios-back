'use strict'

let express = require('express')
let router = express.Router()

const db = require('../../rethinkdb')
const r = db.r

let Publications = require('./model')

let create = require('./handlers/create')

router.get('/', (req, res) => {
  Publications.orderBy(r.desc('createDate'))
  .then(data => {
    res.status(200).send(data)
  })
})

router.post('/', (req, res) => {
  create(req.body)
  .then(data => {
    res.status(200).end()
  })
  .catch(error => {
    res.status(500).end()
  })
})

module.exports = router
