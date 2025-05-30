import { createAirportService,getAirportService,getAirportsService,updateAirportService,destroyAirportService } from "../services/index.js";

import { StatusCodes } from "http-status-codes";
import { errorResponse, ApiResponse } from "../utils/common/index.js";


const createAirportController = async (req, res) => {
  try {
      const airport = await createAirportService({
       name: req.body.name,
       code: req.body.code,
       address: req.body.address,
       cityId: req.body.cityId,
    });

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(
          StatusCodes.CREATED,
          airport,
          "Airport created successfully"
        )
      );
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
};

const getAirportsController = async (req, res) => {
  try {
    const airports = await getAirportsService();
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(
          StatusCodes.OK,
          airports,
          "Airports fetched successfully"
        )
      );
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
};

const getAirportController = async (req, res) => {
  try {
    const airport = await getAirportService(req.params.id);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(
          StatusCodes.OK,
          airport,
          "Requested airport fetched successfully"
        )
      );
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
};

const destroyAirportController = async (req, res) => {
  try {
    const airport = await destroyAirportService(req.params.id);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(
          StatusCodes.OK,
          airport,
          "Airport deleted successfully"
        )
      );
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
};

const updateAirportController = async (req, res) => {
  try {
    const airport = await updateAirportService(req.body, req.params.id);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(
          StatusCodes.OK,
          airport,
          "Airport details updated successfully"
        )
      );
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
};

export {
  createAirportController,
  getAirportsController,
  getAirportController,
  destroyAirportController,
  updateAirportController
};
