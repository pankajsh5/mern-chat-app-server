const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://admin:12345@cluster0.gisfk2y.mongodb.net/?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})
