//file was created at: 2024/6/12
//file is under project: backend
//Author: Tianjia Chen
//E-mail: benchentravail2024@gmail.com
require('dotenv').config();

const optionalConfigs = {
    PORT: process.env.PORT || 5000,
};

const requiredConfigs = {
    MONGODB_URI: process.env.MONGODB_URI,
};

module.exports = {
    ...optionalConfigs,
    ...requiredConfigs,
}
