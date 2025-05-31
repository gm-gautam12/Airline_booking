import { Router } from "express";
import { infoController } from "../../controllers/index.js";

import airplaneRoutes from "../v1/airplane-routes.js";
import cityRoutes from "../v1/city-routes.js";
import airportRoutes from "../v1/airport-routes.js";
import flightRoutes from "../v1/flight-routes.js";


const router = Router();

router.get('/info', infoController);

router.use('/airplanes', airplaneRoutes);

router.use('/cities',cityRoutes);

router.use('/airports', airportRoutes);

router.use('/flights', flightRoutes);


export default router;