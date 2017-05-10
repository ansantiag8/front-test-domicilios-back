let Promise = require('bluebird')

let Publications = require('../model')

let react = (publi, data) => {
  return new Promise((resolve, reject) => {
    let iAux = null

    Publications
    .get(publi)
    .run()
    .then(pub => {
      if (pub.reactions !== undefined && typeof pub.reactions.push === 'function') {
        pub.reactions.forEach((item, i) => {
          if (item.user === data.user) {
            iAux = i
          }
        })

        if (iAux === null) {
          pub.reactions.push({
            react: data.react,
            user: data.user
          })
        } else {
          console.log(`solo actualizaar`)
          pub.reactions[iAux].react = data.react
        }
      } else {
        pub.reactions = [{
          react: data.react,
          user: data.user
        }]
      }

      pub.save()
    })
  })
}

module.exports = react
