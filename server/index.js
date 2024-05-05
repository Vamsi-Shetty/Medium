const express = require("express");
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
var cors = require('cors')
var jwt = require('jsonwebtoken');
require("dotenv").config();

const {connection} = require('./src/database/db');
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.post("/signup", async (req, res) => {
    const {email, password} = req.body;
    bcrypt.hash(password, 3, async function(err, hash) {
        if(err) {
            console.log(err)
        }
        else {
            await userModel.create({email, password: hash});
            res.send({message:"user created successfully"});
        }
            
    });
})

app.listen(PORT, async () => {
    try {
         await connection;
        console.log("Connected to DB");
    } catch (error) {
        console.log("Error connecting to DB");
        console.log(error);
    }
    console.log(`listening on port ${PORT}`);
})