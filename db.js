const mongoose = require('mongoose');
const { MONGODB_URI } = require('./constants');

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
module.export = db;
