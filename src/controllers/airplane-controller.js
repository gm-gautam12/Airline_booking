import {
  AirplaneService,
  getAirplanesService,
  getAirplaneService,
  destroyAirplaneService,
  updateAirplaneService,
} from "../services/index.js";

import { StatusCodes } from "http-status-codes";
import { errorResponse, ApiResponse } from "../utils/common/index.js";

/**
 * The function `createAirplaneController` is an asynchronous function that creates an airplane using
 * data from the request body and returns a response with the created airplane details.
 * @param req - The `req` parameter in the `createAirplaneController` function typically represents the
 * HTTP request object, which contains information about the incoming request such as headers,
 * parameters, body, and more. In this specific function, `req` is used to access the `modelNumber` and
 * `capacity`
 * @param res - The `res` parameter in the `createAirplaneController` function is the response object
 * that will be sent back to the client making the request. It is used to send the response back to the
 * client with the appropriate status code and data.
 * @returns The `createAirplaneController` function is returning a response with status code 201
 * (CREATED) and a JSON object containing an ApiResponse with the status code, airplane data, and a
 * success message "Airplane created successfully" if the airplane creation is successful. If an error
 * occurs during the process, it will return a response with the error status code and the error
 * message.
 */
const createAirplaneController = async (req, res) => {
  try {
    const airplane = await AirplaneService({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(
          StatusCodes.CREATED,
          airplane,
          "Airplane created successfully"
        )
      );
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
};

/**
 * The function `getAirplanesController` fetches airplanes data and returns a JSON response with the
 * fetched data or an error message.
 * @param req - The `req` parameter in the `getAirplanesController` function typically represents the
 * HTTP request object, which contains information about the incoming request such as headers,
 * parameters, body, etc. It is used to extract data sent by the client to the server. In this context,
 * it is likely an
 * @param res - The `res` parameter in the `getAirplanesController` function is typically the response
 * object that is used to send a response back to the client making the request. It is commonly used to
 * set the status code, send data in the response body, and end the response.
 * @returns The `getAirplanesController` function is returning a response with status code 200 (OK) and
 * a JSON object containing an ApiResponse with the status code, airplanes data, and a success message
 * "Airplanes fetched successfully". If an error occurs during the process, the function will return a
 * response with the error status code and the error message.
 */
const getAirplanesController = async (req, res) => {
  try {
    const airplanes = await getAirplanesService();
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(
          StatusCodes.OK,
          airplanes,
          "Airplanes fetched successfully"
        )
      );
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
};

const getAirplaneController = async (req, res) => {
  try {
    const aiplane = await getAirplaneService(req.params.id);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(
          StatusCodes.OK,
          aiplane,
          "Requested airplane fetched successfully"
        )
      );
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
};

const destroyAirplaneController = async (req, res) => {
  try {
    const airplane = await destroyAirplaneService(req.params.id);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(
          StatusCodes.OK,
          airplane,
          "Airplane deleted successfully"
        )
      );
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
};

const updateAirplaneController = async (req, res) => {
  try {
    const aiplane = await updateAirplaneService(req.body, req.params.id);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(
          StatusCodes.OK,
          aiplane,
          "Airplane details updated successfully"
        )
      );
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
};

export {
  createAirplaneController,
  getAirplanesController,
  getAirplaneController,
  destroyAirplaneController,
  updateAirplaneController
};
