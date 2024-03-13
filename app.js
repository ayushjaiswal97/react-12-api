require("dotenv").config({path: "./.env"});
const express = require('express');
const app = express();

// dbconnection
require("./models/dbconfig").dbconnection();

app.listen(process.env.PORT, () => {
console.log('the server is running on port ' + process.env.PORT);
});

