import { error } from "console";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => console.log("MongoDB is Connected !"))
.catch((error) => { console.log(error)});

const app = express();
app.use(express.json());

const port = 3000;
app.listen(port, console.log(`listening on port: ${port} !`));

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json(
        {
            success: false,
            statusCode, 
            message
        });
});