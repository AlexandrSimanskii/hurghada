import mongoose from "mongoose";
import excursion from "../models/excursion.model.js";

export const getExcursions = async (req, res) => {
    try {
        const data = await excursion.find()

        console.log(data);


        res.json(data);
    } catch (error) {
        console.log(error);
    }
};