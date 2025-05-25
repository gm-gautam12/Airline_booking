import { Router } from "express";

import { createCityController,destroyCityController, updateCityController,getCitiesController,getCityController } from "../../controllers/index.js";
import { validateCityCreateRequest } from "../../middlewares/index.js";

const router = Router();


/// /api/v1/city POST
router.post('/',validateCityCreateRequest, createCityController);

/// /api/v1/city/:id DELETE
router.delete('/:id', destroyCityController);

/// /api/v1/city/:id PATCH
router.patch('/:id', updateCityController);

/// /api/v1/city/  GET
router.get('/',getCitiesController);

/// /api/v1/city/:id GET
router.get('/:id',getCityController);


export default router;
