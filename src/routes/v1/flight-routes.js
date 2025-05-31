import {Router} from 'express';
import { createFlightController } from '../../controllers/index.js';

import { validateFlightCreateRequest } from '../../middlewares/index.js';

const router = Router();


/// /api/v1/flights POST
router.post('/',validateFlightCreateRequest,createFlightController);


export default router;