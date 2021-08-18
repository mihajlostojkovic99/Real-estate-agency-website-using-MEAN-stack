"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BuyRequest_controller_1 = require("../controllers/BuyRequest.controller");
const buyRequestRouter = express_1.default.Router();
buyRequestRouter.route('/getAllBuyRequests').get((req, res) => new BuyRequest_controller_1.BuyRequestController().getAllBuyRequests(req, res));
buyRequestRouter.route('/getBuyRequestsForID').post((req, res) => new BuyRequest_controller_1.BuyRequestController().getBuyRequestsForID(req, res));
buyRequestRouter.route('/addBuyRequest').post((req, res) => new BuyRequest_controller_1.BuyRequestController().addBuyRequest(req, res));
buyRequestRouter.route('/ownerApproveBuyRequest').post((req, res) => new BuyRequest_controller_1.BuyRequestController().ownerApproveBuyRequest(req, res));
buyRequestRouter.route('/agentApproveBuyRequest').post((req, res) => new BuyRequest_controller_1.BuyRequestController().agentApproveBuyRequest(req, res));
buyRequestRouter.route('/deleteBuyRequest').post((req, res) => new BuyRequest_controller_1.BuyRequestController().deleteBuyRequest(req, res));
exports.default = buyRequestRouter;
//# sourceMappingURL=BuyRequest.routes.js.map