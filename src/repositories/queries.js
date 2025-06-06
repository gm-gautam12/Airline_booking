const addRowlockOnFlights = (flightId) => {
    return `SELECT * from flights WHERE Flights.id = ${flightId} FOR UPDATE;`
};


export {
    addRowlockOnFlights
};