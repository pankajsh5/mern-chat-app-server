const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`URI`, ()=> {
  console.log('connected to mongodb')
})
