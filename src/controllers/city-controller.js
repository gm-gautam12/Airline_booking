import { StatusCodes } from "http-status-codes";
import { errorResponse, ApiResponse } from "../utils/common/index.js";
import { createCityService } from "../services/index.js";

//POST

const createCityController = async (req, res) => {
    try {
        const city = await createCityService({
            name: req.body.name,
        });

        return res.status(StatusCodes.CREATED).json(
            new ApiResponse(
                StatusCodes.CREATED,
                city,
                "City created successfully"
            )
        );
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
};


export {
    createCityController
};