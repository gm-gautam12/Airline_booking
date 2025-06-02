import {Router} from 'express';
import { createFlightController,getAllFlightsController } from '../../controllers/index.js';

import { validateFlightCreateRequest } from '../../middlewares/index.js';

const router = Router();


/// /api/v1/flights POST
router.post('/',validateFlightCreateRequest,createFlightController);


/// /api/v1/flights?trip=BOM_PNQ  GET
router.get('/',getAllFlightsController);


export default router;