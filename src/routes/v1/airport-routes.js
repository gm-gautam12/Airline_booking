import { Router } from "express";
import {
  createAirportController,
  getAirportController,
  getAirportsController,
  destroyAirportController,
  updateAirportController,
} from "../../controllers/index.js";

import { validateAirportCreateRequest } from "../../middlewares/index.js";

const router = Router();

/// /api/v1/airports POST
router.post('/', validateAirportCreateRequest, createAirportController);

/// /api/v1/airports GET
router.get('/', getAirportsController);

/// /api/v1/airports/:id GET
router.get('/:id', getAirportController);

/// /api/v1/airports/:id DELETE
router.delete('/:id',destroyAirportController);

/// /api/v1/airports/:id PATCH
router.patch('/:id', updateAirportController);

export default router;