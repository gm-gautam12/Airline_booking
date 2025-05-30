import { AirportRepository } from "../repositories/index.js";
import { AppError } from "../utils/index.js";
import { StatusCodes } from "http-status-codes";

const airportRepository = new AirportRepository();


const createAirport = async(data) => {
    try {
        const airport = await airportRepository.create(data);
        return airport;
    } catch (error) {
        if(error.name === "SequelizeValidationError") {
            let explaination = [];
            error.errors.forEach((err)=>{
                explaination.push(err.message);
            });
            throw new AppError(explaination, StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Something went wrong in creating airport", StatusCodes.INTERNAL_SERVER_ERROR);
    }
};


const getAirports = async() => {
    try {
        const airport = await airportRepository.getAll();
        return airport;
    } catch (error) {
        throw new AppError("Something went wrong while fetching airports", StatusCodes.INTERNAL_SERVER_ERROR);
    }
};



const getAirport = async(id) => {
    try {
        const airport = await airportRepository.get(id);
        return airport;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError("Requested airport is not present",error.statusCode);
        }
        throw new AppError("Something went wrong while fetching airport", StatusCodes.INTERNAL_SERVER_ERROR);
    }
};


const destroyAirport = async(id) => {
    try {
        const response = await airportRepository.destroy(id);
        return response;
    } catch (error) {
         if(error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError("Requested airport is not present to delete",error.statusCode);
        }
        throw new AppError("Something went wrong while deleting airport", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

const updateAirport = async(data,id) => {
    try {
        const airport = await airportRepository.update(data,id);
        const [updatedCount] = airport;
         if(updatedCount === 0) {
            throw new AppError("Requested airport is not present to update", StatusCodes.NOT_FOUND);
        }
        return airport;
    } catch (error) {
        console.log(error);
        if(error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError("Requested airport is not present to update",error.statusCode);
        }
        throw new AppError("Something went wrong while updating airport", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export { 
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
 };