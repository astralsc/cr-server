const fs = require('fs')
var mongoose = require('mongoose')

mongoose.connect(`mongodb://${config.db.host}/${config.db.name}`)
  .then(() => console.log('✔️  Successfully connected to the DB'))
  .catch(err => {
    console.error('✖️  Could not connect to database', err)
    process.exit(1)
  })

db = {}
// TODO: AUTO LOAD
db.models = {
    User: require('./models/User'),
    Clan: require('./models/Clan')
}

db.controllers = {
    user: require('./controllers/user'),
    clan: require('./controllers/clan')
}
