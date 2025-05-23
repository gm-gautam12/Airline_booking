/**
 * The function `validateAirplaneCreateRequest` checks if the model number is present in the incoming
 * request and returns an error response if not.
 * @param req - The `req` parameter in the `validateAirplaneCreateRequest` function is the request
 * object representing the HTTP request made to the server. It contains information about the request
 * such as headers, parameters, body, and other details sent by the client. In this case, the function
 * is checking if the
 * @param res - The `res` parameter in the `validateAirplaneCreateRequest` function is the response
 * object that is used to send a response back to the client making the HTTP request. It is typically
 * used to send HTTP status codes, headers, and the response body back to the client.
 * @param next - The `next` parameter in the `validateAirplaneCreateRequest` function is a callback
 * function that is used to pass control to the next middleware function in the request-response cycle.
 * When called, it invokes the next middleware function in the stack. In this context, after the
 * validation is performed in the
 * @returns The `validateAirplaneCreateRequest` function is being exported and returned from this code
 * snippet.
 */
import { StatusCodes } from "http-status-codes";
import { errorResponse } from "../utils/common/index.js";
import { AppError } from "../utils/index.js";

const validateAirplaneCreateRequest = (req, res, next) => {
    if(!req.body.modelNumber){
        errorResponse.message = "Something went wrong while creating airplane";
        errorResponse.error = new AppError(['Model number not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
};


export {validateAirplaneCreateRequest};