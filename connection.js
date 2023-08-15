const mongoose = require('mongoose');
require('dotenv').config();
const URI=process.env.URI;
mongoose.connect(URI, ()=> {
  console.log('connected to mongodb')
})
