import {Router} from 'express';
import { createFlightController,getAllFlightsController,getFlightController,updateSeatsController } from '../../controllers/index.js';

import { validateFlightCreateRequest,validateUpdateSeatsRequest } from '../../middlewares/index.js';

const router = Router();


/// /api/v1/flights POST
router.post('/',validateFlightCreateRequest,createFlightController);


/// /api/v1/flights?trip=BOM_PNQ  GET
router.get('/',getAllFlightsController);


/// /api/v1/flights/:id GET
router.get('/:id',getFlightController);

/// /api/v1/flights/seats PATCH
router.patch('/:id/seats',validateUpdateSeatsRequest,updateSeatsController);

export default router;