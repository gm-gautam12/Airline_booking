import { Router } from "express";
import { createAirplaneController } from "../../controllers/index.js";
import { validateAirplaneCreateRequest } from "../../middlewares/index.js";

const router = Router();

/// /api/v1/airplanes POST
router.post('/', validateAirplaneCreateRequest, createAirplaneController);

export default router;