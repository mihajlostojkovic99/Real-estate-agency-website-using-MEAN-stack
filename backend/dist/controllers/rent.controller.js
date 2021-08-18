"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentController = void 0;
const rent_1 = __importDefault(require("../models/rent"));
class RentController {
    constructor() {
        this.getAllRents = (req, res) => {
            rent_1.default.find({}, (err, lot) => {
                if (err)
                    console.log(err);
                else
                    res.json(lot);
            });
        };
        this.getRentsForID = (req, res) => {
            let id = req.body.id;
            rent_1.default.find({ 'lotID': id }, (err, lot) => {
                if (err)
                    console.log(err);
                else
                    res.json(lot);
            });
        };
        this.addRent = (req, res) => {
            let rent = new rent_1.default(req.body);
            rent.save().then((rent) => {
                res.status(200).json({ 'message': 'rent added' });
            }).catch((err) => {
                res.status(400).json({ 'message': err });
            });
        };
        this.ownerApproveRent = (req, res) => {
            let id = req.body.id;
            let profit = req.body.profit;
            rent_1.default.collection.findOneAndUpdate({ 'id': id }, { $set: { 'ownerApproved': true, 'profit': profit } }, (err, rent) => {
                if (err)
                    console.log(err);
                else
                    res.json(rent);
            });
        };
        this.agentApproveRent = (req, res) => {
            let id = req.body.id;
            rent_1.default.collection.findOneAndUpdate({ 'id': id }, { $set: { 'approved': true, 'ownerApproved': true } }, (err, rent) => {
                if (err)
                    console.log(err);
                else
                    res.json(rent);
            });
        };
        this.deleteRent = (req, res) => {
            let id = req.body.id;
            rent_1.default.findOneAndDelete({ 'id': id }, (err) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'ok' });
            });
        };
    }
}
exports.RentController = RentController;
//# sourceMappingURL=rent.controller.js.map