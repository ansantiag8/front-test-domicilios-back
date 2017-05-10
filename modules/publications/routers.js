'use strict'

let express = require('express')
let router = express.Router()

const db = require('../../rethinkdb')
const r = db.r

let Publications = require('./model')

let create = require('./handlers/create')
let react = require('./handlers/react')

router.get('/', (req, res) => {
  Publications.orderBy(r.desc('createDate'))
  .then(data => {
    data.forEach((pub, i) => {
      if (pub.reactions !== undefined && pub.reactions.length !== undefined) {
        pub.reactions.forEach((item, j) => {
          if (item.user === req.query.user) {
            pub.myReact = item.react
            console.log(`mi reaccion`)
          } else {
            console.log(`no tengo`)
          }
        })
      }
    })
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

router.get('/:id/react', (req, res) => {
  Publications.get(req.params.id)
  .then(data => {
    res.status(200).send(data)
  })
})

router.put('/:id/react', (req, res) => {
  react(req.params.id, req.body)
  res.status(200).end()
})

module.exports = router
