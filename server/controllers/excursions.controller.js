import mongoose from "mongoose";
import excursion from "../models/excursion.model.js";

export const getExcursions = async (req, res) => {
    try {
        const data = await excursion.find()

        res.json("Привет из Хургады");
    } catch (error) {
        console.log(error);
    }
};