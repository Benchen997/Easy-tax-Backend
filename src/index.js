const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const connectToDB = require('./utils/db');
const IncomeModel = require('./model/incomes.model');
// Import the statistics router
const statisticsRouter = require('./router/v1/statistics.router');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/v1/statistics', statisticsRouter);


connectToDB().then(() => {
    console.log("MongoDB connected successfully!");
    app.listen(config.PORT, ()=> {
        console.log(`Server is running on port ${config.PORT}`)
    });
});

app.get("/", (req, res) => {
    res.send("tax calculator backend");
});









