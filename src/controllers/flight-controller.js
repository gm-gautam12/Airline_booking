import { StatusCodes } from "http-status-codes";
import { errorResponse, ApiResponse } from "../utils/common/index.js";
import { createFlightService,getAllFlightsService,getFlightService } from "../services/index.js";


const createFlightController = async (req, res) => {
    try {
        const flight = await createFlightService({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats
        });
        return res.status(StatusCodes.CREATED).json(
            new ApiResponse(
                StatusCodes.CREATED,
                flight,
                "Flight created successfully"
            )
        );
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
};

const getAllFlightsController = async(req,res) => {
    try {
        const flights = await getAllFlightsService(req.query);
        return res.status(StatusCodes.OK).json(
            new ApiResponse(
                StatusCodes.OK,
                flights,
                "Flights fetched successfully"
            )
        );
    } catch (error) {
         errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

const getFlightController = async(req,res) => {
    try {
        const flight = await getFlightService(req.params.id);
        return res.status(StatusCodes.OK).json(
            new ApiResponse(
                StatusCodes.OK,
                flight,
                "Flight fetched successfully"
            )
        );
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

export {
    createFlightController,
    getAllFlightsController,
    getFlightController
};