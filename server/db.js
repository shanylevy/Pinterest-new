const mongoose = require('mongoose');
let DB_URL =process.env.DB_URL || 'mongodb://localhost:27017/pinterest'
// let DB_URL = 'mongodb://localhost:27017/pinterest'


mongoose.connect(DB_URL);

module.exports = mongoose;