import CrudRepository from "./crud-repository.js";
import db from "../models/index.js";
const { city } = db;  


class CityRepository extends CrudRepository {

    constructor() {
        super(city);
    }

}

export default CityRepository;
