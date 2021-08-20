const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");

const workout_programs_routes = require('./routes/workout_programs');


// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import cors from 'body-cors';
// import dotenv from 'dotenv';
// import cookieParser from 'body-cookie';

require("dotenv").config();
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(bodyParser.json());



app.get("/test", (req, res) => {
  res.send("It works");
});

app.use(express.json());
app.use(cookieParser());

//connect to mongoDB
/*const URL = process.env.MONGODB_URL;
mongoose.connect(URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("connection success");
});*/

//Lakshan

app.use("/FitnessGlory/users", userRoutes);

//K shehan

//B Shehan

app.use(workout_programs_routes); 

//Dulshan

//Amantha

//Janudi

//Manushi

//Sandani

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
