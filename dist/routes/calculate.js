"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controllers/controller");
const router = express_1.default.Router();
router.post('/circle', (req, res, next) => {
    controller_1.areaOfCircle(req, res);
});
router.post('/square', (req, res, next) => {
    controller_1.areaOfSquare(req, res);
});
router.post('/triangle', (req, res, next) => {
    controller_1.areaOfTriangle(req, res);
});
router.post('/rectangle', (req, res, next) => {
    controller_1.areaOfRectangle(req, res);
});
exports.default = router;
