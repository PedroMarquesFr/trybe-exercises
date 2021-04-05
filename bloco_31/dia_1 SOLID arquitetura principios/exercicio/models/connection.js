const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL,{ useUnifiedTopology: true });

const db = mongoose.connection;

module.exports = db;
