import CrudRepository from "./crud-repository.js";
import db from "../models/index.js";
import { Sequelize } from "sequelize";
const { Flight, Airplane,Airport, city } = db;  
import {addRowlockOnFlights} from "./queries.js";


class FlightRepository extends CrudRepository {

    constructor() {
        super(Flight);
    }

    async getAllflights(filter,sort) {
        const response = await Flight.findAll({
            where: filter,
            order: sort,
            include: [
                {
                    model: Airplane,
                    required: true,
                    as: "airplaneDetails"
                },
                {
                    model: Airport,
                    required: true,
                    as: "departureAirportDetails",
                    on: {
                        col1: Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=", Sequelize.col("departureAirportDetails.code")),
                    },
                    include: {
                        model: city,
                        required: true,
                    }
                    
                },
                {
                    model: Airport,
                    required: true,
                    as: "arrivalAirportDetails",
                    on: {
                        col1: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=", Sequelize.col("arrivalAirportDetails.code")),
                    },
                     include: {
                        model: city,
                        required: true,
                    }
                }
            ],
        });
        return response;
    }


    async updateRemainingSeats(flightId,seats, decrease = true) {
        const transaction = await db.sequelize.transaction();
        try {
            await db.sequelize.query(addRowlockOnFlights(flightId));  // ROW LEVEL LOCKING
            const flight = await Flight.findByPk(flightId);
            if(decrease) {
                await flight.decrement('totalSeats', {by:seats},{transaction: transaction});
            }else {
            await flight.increment('totalSeats', {by:seats},{transaction: transaction});
            }
            await transaction.commit();
            await flight.save();
            return flight;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
       
        
    }

}

export default FlightRepository;
