import { StatusCodes } from "http-status-codes";
import { errorResponse } from "../utils/common/index.js";
import { AppError } from "../utils/index.js";


const validateFlightCreateRequest = (req, res, next) => {
    if(!req.body.flightNumber){
        errorResponse.message = "Something went wrong while creating flight";
        errorResponse.error = new AppError(['Flight number not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.airplaneId){
        errorResponse.message = "Something went wrong while creating flight";
        errorResponse.error = new AppError(['Airplane id not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.departureAirportId){
        errorResponse.message = "Something went wrong while creating flight";
        errorResponse.error = new AppError(['Flight departure airport id not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.arrivalAirportId){
        errorResponse.message = "Something went wrong while creating flight";
        errorResponse.error = new AppError(['Flight arrival airport id not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.arrivalTime){
        errorResponse.message = "Something went wrong while creating flight";
        errorResponse.error = new AppError(['Flight arrival not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.departureTime){
        errorResponse.message = "Something went wrong while creating flight";
        errorResponse.error = new AppError(['Flight departure time not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.price){
        errorResponse.message = "Something went wrong while creating flight";
        errorResponse.error = new AppError(['Flight price not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.totalSeats){
        errorResponse.message = "Something went wrong while creating flight";
        errorResponse.error = new AppError(['Total seats not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
};


const validateUpdateSeatsRequest = (req, res, next) => {
    if(!req.body.seats) {
        errorResponse.message = "Something went wrong while updating flight";
        errorResponse.error = new AppError(['Seats not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
};


export {
    validateFlightCreateRequest,
    validateUpdateSeatsRequest
};