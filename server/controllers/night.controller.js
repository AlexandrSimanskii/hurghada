import mongoose from "mongoose";
import night from "../models/night.model.js";

export const getNightLive = async (req, res) => {
  try {
    const data = await night.find();

    res.json(data);
  } catch (error) {
    console.log(error);
  }
};
