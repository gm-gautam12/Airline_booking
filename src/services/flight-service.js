import { StatusCodes } from "http-status-codes";
import { FlightRepository } from "../repositories/index.js";
import { AppError, compareTime } from "../utils/index.js";


const flightReposiory = new FlightRepository();


const createFlight = async(data) => {
    try {
        if(compareTime(data.arrivalTime, data.departureTime)){
            throw new AppError("Arrival time should be greater than departure time", StatusCodes.BAD_REQUEST);
        }
        const flight = await flightReposiory.create(data);
        return flight;
    } catch (error) {
        if(error.name === "SequelizeValidationError") {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        if(error instanceof AppError) {
            throw error;
        }
        throw new AppError("Something went wrong in creating flight", StatusCodes.INTERNAL_SERVER_ERROR);
    }
};

const getAllFlights = async(query) => {
    let customFilter = {};
    //trip : BLR-DEL
    if(query.trips) {
        [departureAirportId, arrivalAirportId] = query.trips.split("-");
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;

        if(departureAirportId === arrivalAirportId) {
            throw new AppError("Departure and Arrival airport cannot be same", StatusCodes.BAD_REQUEST);
        }
    }

    try {
        const flights = await flightReposiory.getAllFlights(customFilter);
        return flights;
    } catch (error) {
        throw new AppError("Something went wrong while fetching flights", StatusCodes.INTERNAL_SERVER_ERROR);
    }
};


export {
    createFlight,
    getAllFlights
};

