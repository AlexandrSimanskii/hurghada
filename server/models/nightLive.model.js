import mongoose from "mongoose";

const Scheme = mongoose.Schema;

const nightLiveSchema = new Scheme(
    {
        name: { type: String, required: true },
        highlights: { type: Array, required: true },
        images: { type: Array, required: true },
        description: { type: String, required: true },
        rating: { type: Number, required: false },
        location: { type: String, required: true },
        reviews: { type: Array, required: false },
        website: { type: String, required: false }








    },

);

const nightLive = mongoose.model("night", nightLiveSchema);

export default nightLive;