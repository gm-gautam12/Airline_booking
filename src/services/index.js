import { 
  createAirplane as AirplaneService,
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

import { 
  createAirport as createAirportService,
  updateAirport as updateAirportService,
  getAirports as getAirportsService,
  getAirport as getAirportService,
  destroyAirport as destroyAirportService,
} from "./airport-serivce.js";

import { 
  createFlight as createFlightService,
  getAllFlights as getAllFlightsService,
  getFlight as getFlightService,
  updateRemainingSeats as updateRemainingSeatsService
} from "./flight-service.js";

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
    getCityService,
    createAirportService,
    updateAirportService,
    getAirportsService,
    getAirportService,
    destroyAirportService,
    createFlightService,
    getAllFlightsService,
    getFlightService,
    updateRemainingSeatsService
};