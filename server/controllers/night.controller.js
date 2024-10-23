import mongoose from "mongoose";
import nightLive from "../models/nightLive.model.js";

export const getNightLive = async (req, res) => {
    try {
        const data = await nightLive.find()

        console.log(data);


        res.json(353535);
    } catch (error) {
        console.log(error);
    }
};