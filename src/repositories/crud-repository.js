import { logger } from "../config/logger-config.js";

class CrudRepository {

    constructor(model) {
        this.model = model;
    }

    async create(data) {
            const response = await this.model.create(data);
            return response;
    }

    async destroy(data) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            return response;
        } catch (error) {
            logger.error("something went wrong in crud Repo : destroy");
            throw error;
        }
    }

    async get(data) {
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
            logger.error("something went wrong in crud Repo : get");
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            logger.error("something went wrong in crud Repo : getAll");
            throw error;
        }
    }
    /// data is the object to be updated and id is the primary key
    async update(data, id) { 
        try {
            const response = await this.model.update(data,{
                where: {
                    id: id
                }
            });
            return response;
        } catch (error) {
            logger.error("something went wrong in crud Repo : update");
            throw error;
        }
    }

};

export default CrudRepository;

// The above code defines a `CrudRepository` class that provides basic CRUD (Create, Read, Update, Delete) operations for a given Sequelize model.
// The class constructor takes a model as an argument and assigns it to the `model` property.
// Each method (create, destroy, get, getAll, update) interacts with the database using Sequelize methods.