import { AirplaneRepository } from "../repositories/index.js";

const airplaneRepository = new AirplaneRepository();

const createAirplane = async(data) => {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        throw error;
    }
}


export { createAirplane };