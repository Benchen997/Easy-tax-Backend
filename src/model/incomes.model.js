//file was created at: 2024/6/12
//file is under project: backend
//Author: Tianjia Chen
//E-mail: benchentravail2024@gmail.com
const { Schema, model } = require('mongoose');

const incomeSchema = new Schema({
    employmentType: {
        type: String,
        required: true
    },
    annualIncome: {
        type: Number,
        required: true
    },
    tax: {
        type: Number,
        required: true
    }
}, { collection: 'Incomes' });

module.exports = model("Income", incomeSchema);
