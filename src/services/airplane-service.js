import { AirplaneRepository } from "../repositories/index.js";
import { AppError } from "../utils/index.js";
import { StatusCodes } from "http-status-codes";

const airplaneRepository = new AirplaneRepository();

const createAirplane = async(data) => {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        if(error.name === "SequelizeValidationError") {
            let explaination = [];
            error.errors.forEach((err)=>{
                explaination.push(err.message);
            });
            throw new AppError(explaination, StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Something went wrong in creating airplane", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


export { createAirplane };