import { createAirplane as AirplaneService,
         getAirplanes as getAirplanesService, 
         getAirplane as getAirplaneService,
         destroyAirplane as destroyAirplaneService,
         updateAirplane as updateAirplaneService

}  from "../services/airplane-service.js";

import { createCity as createCityService } from "./city-service.js";

export {
    AirplaneService,
    getAirplanesService,
    getAirplaneService,
    destroyAirplaneService,
    updateAirplaneService,
    createCityService
};