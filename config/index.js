var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , env = process.env.NODE_ENV || 'development'
  , port = 8000
  , admin = {
    "role": "admin",
    "email": "valentinbonnard0303@gmail.com",
    "password": "passwordbatmanrobin1992;",
    "name": "Valentin Bonnard"
  }

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'express-mongoose-api-metronome'
    },
    port: port,
    db: 'mongodb://localhost/db-development',
    admin: admin,
  },

  production: {
    root: rootPath,
    app: {
      name: 'express-mongoose-api-metronome'
    },
    port: port,
    db: 'mongodb://localhost/db-production',
    admin: admin,
  }
};

module.exports = config[env];