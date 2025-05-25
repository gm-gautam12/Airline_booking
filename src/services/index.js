import { createAirplane as AirplaneService,
         getAirplanes as getAirplanesService, 
         getAirplane as getAirplaneService,
         destroyAirplane as destroyAirplaneService,
         updateAirplane as updateAirplaneService

}  from "../services/airplane-service.js";

import {
  createCity as createCityService,
  destroyCity as destroyCityService,
  updateCity as updateCityService,
  getCities as getCitiesService,
  getCity as getCityService
} from "./city-service.js";

export {
    AirplaneService,
    getAirplanesService,
    getAirplaneService,
    destroyAirplaneService,
    updateAirplaneService,
    createCityService,
    destroyCityService,
    updateCityService,
    getCitiesService,
    getCityService
};