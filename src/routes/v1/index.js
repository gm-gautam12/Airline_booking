import { Router } from "express";
import { infoController } from "../../controllers/index.js";

import airplaneRoutes from "../v1/airplane-routes.js";




const router = Router();

router.get('/info', infoController);

router.use('/airplanes', airplaneRoutes);

export default router;