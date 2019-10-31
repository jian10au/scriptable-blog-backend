const cors = require('cors');

module.exports = (app) => {
  const options = {
    origin: process.env.CORS_URL
  }
  app.use(cors(options))
}