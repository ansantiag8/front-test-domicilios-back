const db = require('../../rethinkdb')
const type = db.type
const r = db.r

let publications = db.thinky.createModel('publications', {
  id: type.string(),
  publication: type.string(),
  user: type.string(),
  createDate: type.date().default(r.now()),
  reactions: type.array().schema(type.object().schema({
    react: type.string(),
    createDate: type.date(),
    user: type.string()
  }))
  // id: type.string(),
  // createdAt: type.date().default(r.now()),
  // geometry: type.object().schema({
  //   coordinates: type.array().required(),
  //   type: type.string().enum(['Point', 'LineString', 'Polygon']).required() // dudas con el enum
  // }),
  // areaId: type.number().integer().required(),
  // projectId: type.number().integer(),
  // properties: type.object().schema({
  //   featureType: type.string().required(),
  //   featureId: type.number().integer().required(),
  //   name: type.string().required()
  // })
})

module.exports = publications
