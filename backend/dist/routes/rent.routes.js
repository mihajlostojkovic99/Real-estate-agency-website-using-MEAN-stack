"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rent_controller_1 = require("../controllers/rent.controller");
const rentRouter = express_1.default.Router();
rentRouter.route('/getAllRents').get((req, res) => new rent_controller_1.RentController().getAllRents(req, res));
rentRouter.route('/getRentsForID').post((req, res) => new rent_controller_1.RentController().getRentsForID(req, res));
rentRouter.route('/addRent').post((req, res) => new rent_controller_1.RentController().addRent(req, res));
rentRouter.route('/ownerApproveRent').post((req, res) => new rent_controller_1.RentController().ownerApproveRent(req, res));
rentRouter.route('/agentApproveRent').post((req, res) => new rent_controller_1.RentController().agentApproveRent(req, res));
rentRouter.route('/deleteRent').post((req, res) => new rent_controller_1.RentController().deleteRent(req, res));
exports.default = rentRouter;
//# sourceMappingURL=rent.routes.js.map