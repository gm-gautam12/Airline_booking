import { StatusCodes } from "http-status-codes";
import { errorResponse, ApiResponse } from "../utils/common/index.js";
import { createCityService, destroyCityService, getCitiesService, getCityService, updateCityService } from "../services/index.js";

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


const destroyCityController = async (req, res) => {
  try {
    const city = await destroyCityService(req.params.id);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(
          StatusCodes.OK,
          city,
          "City deleted successfully"
        )
      );
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
};


const updateCityController = async (req, res) => {
  try {
    const city = await updateCityService(req.body, req.params.id);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(
          StatusCodes.OK,
          city,
          "City details updated successfully"
        )
      );
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
};

const getCitiesController = async (req, res) => {
  try {
    const cities = await getCitiesService();
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(
          StatusCodes.OK,
          cities,
          "Cities fetched successfully"
        )
      );
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
};

const getCityController = async (req, res) => {
  try {
    const city = await getCityService(req.params.id);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(
          StatusCodes.OK,
          city,
          "Requested city fetched successfully"
        )
      );
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
};

export {
    createCityController,
    destroyCityController,
    updateCityController,
    getCitiesController,
    getCityController
};