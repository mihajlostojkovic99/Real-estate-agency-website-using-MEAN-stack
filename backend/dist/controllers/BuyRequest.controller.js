"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyRequestController = void 0;
const buyRequest_1 = __importDefault(require("../models/buyRequest"));
class BuyRequestController {
    constructor() {
        this.getAllBuyRequests = (req, res) => {
            buyRequest_1.default.find({}, (err, buyRequest) => {
                if (err)
                    console.log(err);
                else
                    res.json(buyRequest);
            });
        };
        this.getBuyRequestsForID = (req, res) => {
            let id = req.body.id;
            buyRequest_1.default.find({ 'lotID': id }, (err, BuyRequest) => {
                if (err)
                    console.log(err);
                else
                    res.json(BuyRequest);
            });
        };
        this.addBuyRequest = (req, res) => {
            let buyRequest = new buyRequest_1.default(req.body);
            buyRequest.save().then((buyRequest) => {
                res.status(200).json({ 'message': 'rent added' });
            }).catch((err) => {
                res.status(400).json({ 'message': err });
            });
        };
        this.ownerApproveBuyRequest = (req, res) => {
            let id = req.body.id;
            let profit = req.body.profit;
            buyRequest_1.default.collection.findOneAndUpdate({ 'id': id }, { $set: { 'ownerApproved': true, 'profit': profit } }, (err, rent) => {
                if (err)
                    console.log(err);
                else
                    res.json(rent);
            });
        };
        this.agentApproveBuyRequest = (req, res) => {
            let id = req.body.id;
            buyRequest_1.default.collection.findOneAndUpdate({ 'id': id }, { $set: { 'approved': true, 'ownerApproved': true } }, (err, rent) => {
                if (err)
                    console.log(err);
                else
                    res.json(rent);
            });
        };
        this.deleteBuyRequest = (req, res) => {
            let id = req.body.id;
            buyRequest_1.default.findOneAndDelete({ 'id': id }, (err) => {
                if (err)
                    console.log(err);
            });
        };
    }
}
exports.BuyRequestController = BuyRequestController;
//# sourceMappingURL=BuyRequest.controller.js.map