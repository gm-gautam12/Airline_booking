import { AirplaneService } from "../services/index.js";
import { StatusCodes } from "http-status-codes";

const createAirplaneController = async(req, res) => {
    try {
        const airplane = await AirplaneService({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity,
        })

        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Airplane created successfully",
            data: airplane,
            error: {},
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Internal server error",
            data: {},
            error: error.message,
        });
    }
};



export { createAirplaneController };
