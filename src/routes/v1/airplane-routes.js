import { Router } from "express";
import {
  createAirplaneController,
  getAirplanesController,
  getAirplaneController,
  destroyAirplaneController,
  updateAirplaneController,
} from "../../controllers/index.js";

import { validateAirplaneCreateRequest } from "../../middlewares/index.js";

const router = Router();

/// /api/v1/airplanes POST
router.post('/', validateAirplaneCreateRequest, createAirplaneController);

/// /api/v1/airplanes GET
router.get('/', getAirplanesController);

/// /api/v1/airplanes/:id GET
router.get('/:id', getAirplaneController);

/// /api/v1/airplanes/:id DELETE
router.delete('/:id',destroyAirplaneController);

/// /api/v1/airplanes/:id PATCH
router.patch('/:id', updateAirplaneController);

export default router;