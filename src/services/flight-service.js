import { StatusCodes } from "http-status-codes";
import { FlightRepository } from "../repositories/index.js";
import { AppError, compareTime } from "../utils/index.js";
import { Op } from "sequelize";


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
    const endingTripTime = "23:59:00";
    let sortFilter = [];

    //trip : BLR-DEL
    if(query.trips) {
        const [departureAirportId, arrivalAirportId] = query.trips.split("-");
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;

        if(!departureAirportId || !arrivalAirportId) {
            throw new AppError("Departure and Arrival airport cannot be empty", StatusCodes.BAD_REQUEST);
        }
        if(departureAirportId === arrivalAirportId) {
            throw new AppError("Departure and Arrival airport cannot be same", StatusCodes.BAD_REQUEST);
        }

        if(query.price){
            const [minPrice, maxPrice] = query.price.split("-");
            console.log(minPrice, maxPrice);
            customFilter.price = {
                [Op.between]: [minPrice,(maxPrice  === undefined ? 20000 : maxPrice)],
            }
        }

        if(query.travellers) {
            customFilter.totalSeats = {
                [Op.gte]: query.travellers
            }
        }

        if(query.tripDate) {
            customFilter.departureTime = {
                [Op.between]: [query.tripDate, query.tripDate + endingTripTime]
            }
        }

        if(query.sort){
            const params = query.sort.split(",");
            const sortFilters = params.map((param) => param.split("_"));
            sortFilter = sortFilters;
        }
    }
    try {
        const flights = await flightReposiory.getAllflights(customFilter,sortFilter);
        return flights;
    } catch (error) {
         if(error instanceof AppError) {
            throw error;
        }
        throw new AppError("Something went wrong while fetching flights", StatusCodes.INTERNAL_SERVER_ERROR);
    }
};


export {
    createFlight,
    getAllFlights
};

