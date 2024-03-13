const mongoose = require("mongoose");

exports.dbconnection = async () => {
    try{
        mongoose.connect(process.env.MONGO_url);
        console.log("Established connection!");
    } catch(error) {
        console.log(error.message);
    
}
};