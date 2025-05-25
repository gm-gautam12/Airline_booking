import { StatusCodes } from "http-status-codes";
import { errorResponse } from "../utils/common/index.js";
import { AppError } from "../utils/index.js";

const validateCityCreateRequest = (req, res, next) => {
    if(!req.body.name){
        errorResponse.message = "Something went wrong while creating City";
        errorResponse.error = new AppError(['city name not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
};


export {validateCityCreateRequest};