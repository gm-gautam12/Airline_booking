import { Router } from "express";

import { createCityController } from "../../controllers/index.js";
import { validateCityCreateRequest } from "../../middlewares/index.js";

const router = Router();


/// /api/v1/city POST
router.post('/',validateCityCreateRequest, createCityController);




export default router;
