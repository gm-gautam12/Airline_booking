import { Router } from "express";

import { createCityController,destroyCityController, updateCityController } from "../../controllers/index.js";
import { validateCityCreateRequest } from "../../middlewares/index.js";

const router = Router();


/// /api/v1/city POST
router.post('/',validateCityCreateRequest, createCityController);

// /api/v1/city/:id DELETE
router.delete('/:id', destroyCityController);

// /api/v1/city/:id PATCH
router.patch('/:id', updateCityController);




export default router;
