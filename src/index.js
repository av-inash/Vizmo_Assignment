const dotenv = require("dotenv");
const connectDB = require("./db/index.js");
const app = require('./app.js');

dotenv.config();


connectDB()
    .then(() => {
        const PORT = process.env.PORT || 4006;
        app.listen(PORT, () => {
            console.log(`server is running at port : ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("Mongodb connection failed !!", err);
    });

module.exports = app;
