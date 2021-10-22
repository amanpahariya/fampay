const express = require("express");
require("./DB/index");
require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const form = require("multer")();
const server = express();


server.use([
    bodyParser.json(),
    bodyParser.urlencoded({extended: true}),
    form.array(),
    cookieParser(),
    require("./routes/routes")
])


server.listen(3000, () => {
    console.log("Server is running");
})
