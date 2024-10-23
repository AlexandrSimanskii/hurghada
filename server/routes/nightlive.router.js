import express from "express";

import {getNightLive} from "../controllers/night.controller.js"

const router = express.Router();
router.get("/nightlive",getNightLive );

export default router;