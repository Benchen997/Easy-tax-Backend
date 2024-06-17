//file was created at: 2024/6/12
//file is under project: backend
//Author: Tianjia Chen
//E-mail: benchentravail2024@gmail.com

const IncomeModel = require('../model/incomes.model');

const getStatistics = async (req, res) => {
    const userTaxableIncome = parseFloat(req.query.userTaxableIncome);

    if (isNaN(userTaxableIncome)) {
        return res.status(400).send("Invalid userTaxableIncome parameter");
    }

    try {
        // Calculate max, min, and average taxable income
        const stats = await IncomeModel.aggregate([
            {
                $group: {
                    _id: null,
                    maxTax: { $max: "$tax" },
                    minTax: { $min: "$tax" },
                    avgTax: { $avg: "$tax" }
                }
            },
            {
                $project: {
                    _id: 0,
                    maxTax: 1,
                    minTax: 1,
                    avgTax: 1
                }
            }
        ]);

        // Find the ranking of the userTaxableIncome
        const allIncomes = await IncomeModel.find().sort({ tax: 1 });
        const rank = allIncomes.findIndex(income => income.tax >= userTaxableIncome) + 1;
        const totalCount = allIncomes.length;
        const beatsPercentage = (rank - 1) / totalCount;

        const result = {
            maxTaxableIncome: stats.length > 0 ? stats[0].maxTax : 0,
            minTaxableIncome: stats.length > 0 ? stats[0].minTax : 0,
            avgTaxableIncome: stats.length > 0 ? stats[0].avgTax : 0,
            rank: totalCount - rank,
            beatsPercentage: (beatsPercentage*100).toFixed(2)
        };

        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    getStatistics
};
