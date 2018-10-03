const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');


module.exports = function () {

    // Log the uncaught exceptions to a different file
    winston.handleExceptions(
        new winston.transports.Console({
            colorize: true,
            prettyPrint: true,
            timestamp: new Date().toLocaleDateString(),
        }),
        new winston.transports.File({
            filename: './logs/uncaughtExceptions.log',
            colorize: false,
            prettyPrint: true,
            timestamp: new Date().toLocaleDateString(),
            json: false,
        })
    );

    // Log the Unhandled Promise Rejections to uncaughtExceptions.log file
    process.on('unhandledRejection', (ex) => {
        throw ex;
    });

    // Handle caught exceptions
    winston.add(winston.transports.File, {
        filename: './logs/logfile.log',
        timestamp: new Date().toLocaleDateString(),
        handleExceptions: true,
        json: false,
        prettyPrint: true,
        maxFiles: 5,
        maxsize: 5242880, //5MB
    });
    winston.add(winston.transports.MongoDB, {
        db: 'mongodb://localhost/vidly',
        level: 'error'
    });
};