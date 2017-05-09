let Promise = require('bluebird')

let Publications = require('../model')

let create = (data) => {
  return new Promise((resolve, reject) => {
    Publications.save({
      publication: data.publication,
      user: data.user
    })
    .then(p => {
      resolve(p)
    })
    .catch(error => {
      reject(error)
    })
  })
}

module.exports = create
