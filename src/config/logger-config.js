import { createLogger,format,transports } from "winston";


const { combine, timestamp, label, printf } = format;

const customFormat = printf(({level, message, label, timestamp}) => {
    return `${timestamp} : ${level}: ${message}`;
});

const logger = createLogger({
    format: combine(
        //label({ label: 'my-app' }),
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        customFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'combined.log' }),
    ],
});

export {logger};