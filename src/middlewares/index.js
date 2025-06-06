import { validateAirplaneCreateRequest } from "./airplane-middleware.js";
import { validateCityCreateRequest } from "./city-middleware.js";
import  { validateAirportCreateRequest } from "./airport-middleware.js";
import { validateFlightCreateRequest,validateUpdateSeatsRequest } from "./flight-middleware.js";


export { validateAirplaneCreateRequest,validateCityCreateRequest,validateAirportCreateRequest, validateFlightCreateRequest,validateUpdateSeatsRequest };