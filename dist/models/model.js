"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAreaOfTriangle = exports.calculateAreaOfSquare = exports.calculateAreaOfRectangle = exports.calculateAreaOfCircle = exports.getAllData = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dbFilePath = path_1.default.resolve(__dirname, "../database.json");
const database = require('../database.json');
/**
 * @description - Checks if the database file exists and creates one if it doesn't
 * @param dbFilePath - The path to where the database file is stored if/when created
 * @returns - A boolean value
 */
const fileExists = fs_1.default.existsSync(dbFilePath);
if (!fileExists) {
    fs_1.default.appendFileSync("database.json", JSON.stringify([]));
}
/**
 * @description - Returns all the entries in the database
 * @returns - A stringified format of the JSON Database Object
 */
const getAllData = () => {
    return new Promise((resolve, reject) => {
        if (database.length === 0) {
            reject({ message: 'Database is empty, make a new area calculation' });
        }
        else {
            resolve(JSON.stringify(database));
        }
    });
};
exports.getAllData = getAllData;
/**
 * @description - Calculates the area of a circle and saves the operation details in a database
 * @param details - An Object representing the body of the POST request
 * @returns - A stringified format of the newly created JSON Object
 */
const calculateAreaOfCircle = (details) => {
    return new Promise((resolve, reject) => {
        const { shape, dimension } = details;
        if (typeof (dimension) !== "number" || dimension < 0) {
            reject(({ message: "Invalid number imput, kindly enter a valid positive integer value" }));
        }
        else {
            const date = new Date().toUTCString();
            const area = Math.PI * dimension * dimension;
            const newEntry = {
                shape: shape,
                area: Number(area.toFixed(2)),
                Date: date
            };
            database.push(newEntry);
            writeDataToFile(dbFilePath, database);
            resolve(JSON.stringify(newEntry));
        }
    });
};
exports.calculateAreaOfCircle = calculateAreaOfCircle;
/**
 * @description - Calculates the area of a rectangle and saves the operation details in a database
 * @param details - An Object representing the body of the POST request
 * @returns - A stringified format of the newly created JSON Object
 */
const calculateAreaOfRectangle = (details) => {
    return new Promise((resolve, reject) => {
        const { shape, dimension } = details;
        if (typeof (dimension.a) !== "number" || dimension.a < 0 || typeof (dimension.b) !== "number" || dimension.b < 0) {
            reject(({ message: "Invalid number imput, kindly enter a valid positive integer value" }));
        }
        else {
            const area = dimension.a * dimension.b;
            const date = new Date().toUTCString();
            const newEntry = {
                shape: shape,
                area: area,
                Date: date
            };
            database.push(newEntry);
            writeDataToFile(dbFilePath, database);
            resolve(JSON.stringify(newEntry));
        }
    });
};
exports.calculateAreaOfRectangle = calculateAreaOfRectangle;
/**
 * @description - Calculates the area of a square and saves the operation details in a database
 * @param details - An Object representing the body of the POST request
 * @returns - A stringified format of the newly created JSON Object
 */
const calculateAreaOfSquare = (details) => {
    return new Promise((resolve, reject) => {
        const { shape, dimension } = details;
        if (typeof (dimension) !== "number" || dimension < 0) {
            reject(({ message: "Invalid number imput, kindly enter a valid positive integer value" }));
        }
        else {
            const area = dimension * dimension;
            const date = new Date().toUTCString();
            const newEntry = {
                shape: shape,
                area: area,
                Date: date
            };
            database.push(newEntry);
            writeDataToFile(dbFilePath, database);
            resolve(JSON.stringify(newEntry));
        }
    });
};
exports.calculateAreaOfSquare = calculateAreaOfSquare;
/**
 * @description - Calculates the area of a triangle and saves the operation details in a database
 * @param details - An Object representing the body of the POST request
 * @returns - A stringified format of the newly created JSON Object
 */
const calculateAreaOfTriangle = (details) => {
    return new Promise((resolve, reject) => {
        const { shape, dimension } = details;
        const { a, b, c } = dimension;
        if (typeof (a) !== "number" || a < 0 || typeof (b) !== "number" || b < 0 || typeof (c) !== "number" || c < 0) {
            reject(({ message: "Invalid number imput, kindly enter a valid positive integer value" }));
        }
        else {
            const semiPerimeter = (a + b + c) / 2;
            const area = Math.sqrt((semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c)));
            const date = new Date().toUTCString();
            const newEntry = {
                shape: shape,
                area: Number(area.toFixed(2)),
                Date: date
            };
            database.push(newEntry);
            writeDataToFile(dbFilePath, database);
            resolve(JSON.stringify(newEntry));
        }
    });
};
exports.calculateAreaOfTriangle = calculateAreaOfTriangle;
/**
 * @description - Writes the current database to the database file
 * @param dbPath - The path to where the database file is located
 * @param content - The file/content to be appended to the database
 */
function writeDataToFile(dbPath, content) {
    fs_1.default.writeFile(dbPath, JSON.stringify(content, null, 2), { encoding: 'utf-8' }, (err) => {
        if (err) {
            throw err;
        }
    });
}
