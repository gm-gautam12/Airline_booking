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

const destroyCity = async(id) => {
    try {
        const response = await cityRepository.destroy(id);
        return response;
    } catch (error) {
         if(error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError("Requested city is not present to delete",error.statusCode);
        }
        throw new AppError("Something went wrong while deleting city", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


const updateCity = async(data,id) => {
    try {
        const city = await cityRepository.update(data,id);
        const [updatedCount] = city;
         if(updatedCount === 0) {
            throw new AppError("Requested city is not present to update", StatusCodes.NOT_FOUND);
        }
        return city;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError("Requested airplane is not present to update",error.statusCode);
        }
        throw new AppError("Something went wrong while updating city", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


export {
    createCity,
    destroyCity,
    updateCity
};