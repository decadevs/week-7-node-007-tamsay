"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaOfTriangle = exports.areaOfSquare = exports.areaOfRectangle = exports.areaOfCircle = exports.getAllDatabaseEntry = void 0;
const model_1 = require("../models/model");
/**
 * @description - Gets all the entries in the database
 * @param req - Incoming request parameter
 * @param res - Outgoing response result
 * @route GET /fetchRecords
 * @returns - A JSON Object containing all data entries in the database
 */
const getAllDatabaseEntry = async (req, res) => {
    try {
        const data = await model_1.getAllData();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(data);
    }
    catch (error) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: error }));
    }
};
exports.getAllDatabaseEntry = getAllDatabaseEntry;
/**
 * @description Calculates the area of a circle and ends the post request
 * @param req Incoming request parameter
 * @param res Incoming request parameter
 * @route POST /calculate/circle
 * @returns - A JSON Object showing the details of the proifle added to the database
 */
const areaOfCircle = async (req, res) => {
    try {
        const output = JSON.stringify(req.body);
        const body = JSON.parse(output);
        const newEntry = await model_1.calculateAreaOfCircle(body);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        return res.end(newEntry);
    }
    catch (error) {
        res.writeHead(404, { 'Content-Type': "application/json" });
        res.end(JSON.stringify({ message: error }));
    }
};
exports.areaOfCircle = areaOfCircle;
/**
 * @description Calculates the area of a rectangle and ends the post request
 * @param req Incoming request parameter
 * @param res Incoming request parameter
 * @route POST /calculate/rectangle
 * @returns - A JSON Object showing the details of the proifle added to the database
 */
const areaOfRectangle = async (req, res) => {
    try {
        const output = JSON.stringify(req.body);
        const body = JSON.parse(output);
        const newEntry = await model_1.calculateAreaOfRectangle(body);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        return res.end(newEntry);
    }
    catch (error) {
        res.writeHead(404, { 'Content-Type': "application/json" });
        res.end(JSON.stringify({ message: error }));
    }
};
exports.areaOfRectangle = areaOfRectangle;
/**
 * @description Calculates the area of a square and ends the post request
 * @param req Incoming request parameter
 * @param res Incoming request parameter
 * @route POST /calculate/square
 * @returns - A JSON Object showing the details of the proifle added to the database
 */
const areaOfSquare = async (req, res) => {
    try {
        const output = JSON.stringify(req.body);
        const body = JSON.parse(output);
        const newEntry = await model_1.calculateAreaOfSquare(body);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        return res.end(newEntry);
    }
    catch (error) {
        res.writeHead(404, { 'Content-Type': "application/json" });
        res.end(JSON.stringify({ message: error }));
    }
};
exports.areaOfSquare = areaOfSquare;
/**
 * @description Calculates the area of a triangle and ends the post request
 * @param req Incoming request parameter
 * @param res Incoming request parameter
 * @route POST /calculate/triangle
 * @returns - A JSON Object showing the details of the proifle added to the database
 */
const areaOfTriangle = async (req, res) => {
    try {
        const output = JSON.stringify(req.body);
        const body = JSON.parse(output);
        const newEntry = await model_1.calculateAreaOfTriangle(body);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        return res.end(newEntry);
    }
    catch (error) {
        res.writeHead(404, { 'Content-Type': "application/json" });
        res.end(JSON.stringify({ message: error }));
    }
};
exports.areaOfTriangle = areaOfTriangle;
