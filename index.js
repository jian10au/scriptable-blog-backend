const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();

const PORT = process.env.PORT || 5000

const app = express();

// mongoose
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(process.env.DB_URL, dbOptions, (err) => {
  if (err) {
    console.log('not connected ❌')
  } else {
    console.log('connected ✅')
  }
})

// dev
app.use(morgan('dev'));

// cors
require('./middleware/cors-middleware')(app);

// require all routes
app.use(require('./routes'))

app.listen(PORT, () => console.log('listening on port 5000'))