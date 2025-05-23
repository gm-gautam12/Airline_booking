import { Router } from "express";
import { createAirplaneController } from "../../controllers/index.js";


const router = Router();

/// /api/v1/airplanes POST
router.post('/', createAirplaneController);

export default router;