const express = require("express");


const userRoutes = require('./routes/user.routes.js');

const blogroutes = require("./routes/blog.routes.js")

const app = express();



app.get("/", (req, res) => {
    res.json({ message: "Hello from vizmo backend11111111222222222222222!" });
});

// Middleware to parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// User routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/blog", blogroutes)



module.exports = app;
