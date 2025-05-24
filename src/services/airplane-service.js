import { AirplaneRepository } from "../repositories/index.js";
import { AppError } from "../utils/index.js";
import { StatusCodes } from "http-status-codes";

const airplaneRepository = new AirplaneRepository();

/**
 * The function `createAirplane` asynchronously creates an airplane object and handles validation
 * errors using Sequelize in JavaScript.
 * @param data - The `data` parameter in the `createAirplane` function represents the information
 * needed to create a new airplane. This data typically includes details such as the airplane's model,
 * manufacturer, capacity, registration number, and any other relevant information required for
 * creating a new airplane entry in the database.
 * @returns The `createAirplane` function is returning the created airplane object if the creation is
 * successful. If there is a validation error during creation (SequelizeValidationError), it will throw
 * an `AppError` with an explanation of the validation errors. If any other error occurs during the
 * creation process, it will throw an `AppError` with a generic message indicating that something went
 * wrong in creating the airplane
 */
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
};

/**
 * The function `getAirplane` asynchronously fetches all airplanes from a repository and handles any
 * errors that occur.
 * @returns The `getAirplane` function is returning the result of fetching all airplanes from the
 * airplane repository using `airplaneRepository.getAll()`. If the fetching is successful, it will
 * return the airplane data. If an error occurs during the fetching process, it will throw an
 * `AppError` with a message "Something went wrong while fetching airplanes" and an HTTP status code of
 * 500 (Internal Server Error
 */
const getAirplanes = async() => {
    try {
        const airplane = await airplaneRepository.getAll();
        return airplane;
    } catch (error) {
        throw new AppError("Something went wrong while fetching airplanes", StatusCodes.INTERNAL_SERVER_ERROR);
    }
};


/**
 * The function `getAirplane` asynchronously retrieves an airplane object by its ID from a repository
 * and handles errors, throwing an `AppError` if the airplane is not found.
 * @param id - The `id` parameter in the `getAirplane` function is used to specify the unique
 * identifier of the airplane that you want to retrieve from the airplane repository.
 * @returns The `getAirplane` function is returning the airplane object fetched from the
 * `airplaneRepository` with the specified `id`. If the airplane is not found, it throws an `AppError`
 * with the message "Requested airplane is not present" and the status code provided in the error
 * object.
 */
const getAirplane = async(id) => {
    try {
        const airplane = await airplaneRepository.get(id);
        return airplane;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError("Requested airplane is not present",error.statusCode);
        }
        throw new AppError("Something went wrong while fetching airplane", StatusCodes.INTERNAL_SERVER_ERROR);
    }
};


/**
 * The function `destroyAirplane` asynchronously deletes an airplane by its ID and handles errors
 * appropriately.
 * @param id - The `id` parameter in the `destroyAirplane` function represents the unique identifier of
 * the airplane that you want to delete from the database. This identifier is used to locate the
 * specific airplane record that needs to be removed.
 * @returns The `destroyAirplane` function is returning the response from the
 * `airplaneRepository.destroy(id)` call if it is successful. If an error occurs, it checks if the
 * error status code is `NOT_FOUND`. If it is, it throws an `AppError` with the message "Requested
 * airplane is not present to delete" and the error status code. If the error status code is not `
 */
const destroyAirplane = async(id) => {
    try {
        const response = await airplaneRepository.destroy(id);
        return response;
    } catch (error) {
         if(error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError("Requested airplane is not present to delete",error.statusCode);
        }
        throw new AppError("Something went wrong while deleting airplane", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


/**
 * The function `updateAirplane` asynchronously updates airplane data and handles errors appropriately.
 * @param data - The `data` parameter in the `updateAirplane` function represents the new information
 * or changes that you want to update for a specific airplane. This data could include attributes such
 * as the airplane's model, manufacturer, year of production, or any other relevant details that you
 * wish to modify.
 * @param id - The `id` parameter in the `updateAirplane` function is used to specify the unique
 * identifier of the airplane that needs to be updated. This identifier is typically used to locate the
 * specific airplane record in the database that requires updating.
 * @returns The `updateAirplane` function is returning the updated airplane object if the update was
 * successful. If the update count is 0, indicating that the requested airplane was not found, it
 * throws an `AppError` with a status code of 404 (NOT_FOUND). If any other error occurs during the
 * update process, it throws an `AppError` with a status code of 500 (INTERNAL
 */
const updateAirplane = async(data,id) => {
    try {
        const airplane = await airplaneRepository.update(data,id);
        const [updatedCount] = airplane;
         if(updatedCount === 0) {
            throw new AppError("Requested airplane is not present to update", StatusCodes.NOT_FOUND);
        }
        return airplane;
    } catch (error) {
        
        if(error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError("Requested airplane is not present to update",error.statusCode);
        }
        throw new AppError("Something went wrong while updating airplane", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export { 
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
 };