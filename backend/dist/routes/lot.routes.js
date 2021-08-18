"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const lot_controller_1 = require("../controllers/lot.controller");
const lotRouter = express_1.default.Router();
lotRouter.route('/getAllLots').get((req, res) => new lot_controller_1.LotController().getAllLots(req, res));
lotRouter.route('/searchCity').post((req, res) => new lot_controller_1.LotController().searchCity(req, res));
lotRouter.route('/findByID').post((req, res) => new lot_controller_1.LotController().findByID(req, res));
lotRouter.route('/addLot').post((req, res) => new lot_controller_1.LotController().addLot(req, res));
lotRouter.route('/updateLot').post((req, res) => new lot_controller_1.LotController().updateLot(req, res));
lotRouter.route('/findByOwner').post((req, res) => new lot_controller_1.LotController().findByOwner(req, res));
lotRouter.route('/deleteByID').post((req, res) => new lot_controller_1.LotController().deleteByID(req, res));
exports.default = lotRouter;
//# sourceMappingURL=lot.routes.js.map