import mongoose from "mongoose";

const Scheme = mongoose.Schema;

const excursionSchema = new Scheme(
    {
        name: { type: String, required: true },
        price: { type: String, required: true },
        image: { type: String, required: true },
        category: { type: String, required: true },
        description: { type: String, required: true },
        duration: { type: String, required: true },
        group: { type: String, required: true },
        reviews: { type: String, required: false },
        rating: { type: String, required: false },
        location: { type: String, required: true },
    },

);

const excursion = mongoose.model("excursion", excursionSchema);

export default excursion;