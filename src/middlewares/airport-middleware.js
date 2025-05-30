import { StatusCodes } from "http-status-codes";
import { errorResponse } from "../utils/common/index.js";
import { AppError } from "../utils/index.js";

const validateAirportCreateRequest = (req, res, next) => {
    if(!req.body.name){
        errorResponse.message = "Something went wrong while creating airport";
        errorResponse.error = new AppError(['Airport name not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.code){
        errorResponse.message = "Something went wrong while creating airport";
        errorResponse.error = new AppError(['Airport code not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.cityId){
        errorResponse.message = "Something went wrong while creating airport";
        errorResponse.error = new AppError(['Airport cityId not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
};


export {validateAirportCreateRequest};