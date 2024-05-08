import { error } from "console";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => console.log("MongoDB is Connected !"))
.catch((error) => { console.log(error)});

const app = express();

const port = 3000;
app.listen(port, console.log(`listening on port: ${port} !`));