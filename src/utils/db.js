//file was created at: 2024/6/12
//file is under project: backend
//Author: Tianjia Chen
//E-mail: benchentravail2024@gmail.com
const mongoose = require('mongoose');
const config = require('../config');

const connectToDB = async () => {
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.on("connected", () => {
        console.log("Connected to MongoDB");
    });
    db.on("disconnected", () => {
        console.log("Disconnected from MongoDB");
    });
    return mongoose.connect(config.MONGODB_URI);
};

module.exports = connectToDB;