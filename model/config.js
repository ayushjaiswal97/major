const mongoose = require('mongoose');
const mongodburl = require('./keys').url.mongodb

mongoose.connect(mongodburl, {useNewUrlParser: true, useUnifiedTopology: true})
.then( () => console.log('Db Configured!'))
.catch( err => console.log(err));
