import { AirplaneService } from "../services/index.js";
import { StatusCodes } from "http-status-codes";
import { errorResponse, ApiResponse } from "../utils/common/index.js";


const createAirplaneController = async(req, res) => {
    try {
        const airplane = await AirplaneService({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity,
        })

        return res.status(StatusCodes.CREATED).json(
            new ApiResponse(
                StatusCodes.CREATED,
                airplane,
                "Airplane created successfully",
            )
        );
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
};



export { createAirplaneController };
