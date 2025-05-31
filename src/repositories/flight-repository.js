import CrudRepository from "./crud-repository.js";
import db from "../models/index.js";
const { Flight } = db;  


class FlightRepository extends CrudRepository {

    constructor() {
        super(Flight);
    }

    async getAllflights(filter) {
        const response = await Flight.findAll({
            where: filter
        });
        return response;
    }

}

export default FlightRepository;
