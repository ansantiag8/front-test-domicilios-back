'use strict'

let thinky = require('thinky')({
  "authKey": "",
  "db": "publications",
  "host": "localhost",
  "enforce_extra": "remove"
})
let type = thinky.type
let r = thinky.r

module.exports = {
  // config: config.rethinkdb,
  thinky: thinky,
  type: type,
  r: r
}
