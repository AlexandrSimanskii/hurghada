import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import excursion from "./routes/excursions.router.js"
import nightLive from "./routes/nightlive.router.js"



const app = express();

dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("Connect with MongoDB");
    })
    .catch((err) => console.log("Не удалось подключиться к MongoDB", err));

const PORT = process.env.PORT || 3004;


app.listen(PORT, () => {
    console.log("Server is running on port 3004");
});


app.use(cookieParser());
app.use(express.json());

app.use("/api", excursion);
app.use("/api", nightLive);