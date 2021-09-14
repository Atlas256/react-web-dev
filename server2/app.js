const { log_ok, log_info, log_error } = require("./consoleColor");
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://localhost/user-db")

app.use("/api", require("./api"));




app.listen(5000, err => {
    err ? log_error('SERVER_ERROR: ' + err) : log_ok('Server starting...')
})