import { CityRepository } from "../repositories/index.js";
import { AppError } from "../utils/index.js";
import { StatusCodes } from "http-status-codes";

const cityRepository = new CityRepository();


const createCity = async(data) => {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        
        if(error.name === "SequelizeValidationError" || error.name === "SequelizeUniqueConstraintError") {
            let explaination = [];
            error.errors.forEach((err)=>{
                explaination.push(err.message);
            });
            throw new AppError(explaination, StatusCodes.BAD_REQUEST);
        }

        throw new AppError("Something went wrong in creating city", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


export {
    createCity
};