import { Router } from "express";
import { infoController } from "../../controllers/index.js";

import airplaneRoutes from "../v1/airplane-routes.js";
import cityRoutes from "../v1/city-routes.js";



const router = Router();

router.get('/info', infoController);

router.use('/airplanes', airplaneRoutes);

router.use('/cities',cityRoutes);


export default router;