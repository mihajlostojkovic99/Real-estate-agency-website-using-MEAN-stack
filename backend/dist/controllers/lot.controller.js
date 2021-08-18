"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LotController = void 0;
const lot_1 = __importDefault(require("../models/lot"));
class LotController {
    constructor() {
        this.getAllLots = (req, res) => {
            lot_1.default.find({}, (err, lot) => {
                if (err)
                    console.log(err);
                else
                    res.json(lot);
            });
        };
        this.searchCity = (req, res) => {
            let city = req.body.city;
            if (city == '' || !city) {
                lot_1.default.find({}, (err, lot) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(lot);
                });
            }
            else {
                lot_1.default.find({ 'city': city }, (err, lot) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(lot);
                });
            }
        };
        this.findByID = (req, res) => {
            let id = req.body.id;
            lot_1.default.findOne({ 'id': id }, (err, lot) => {
                if (err)
                    console.log(err);
                else
                    res.json(lot);
            });
        };
        this.addLot = (req, res) => {
            let lot = new lot_1.default(req.body);
            lot.save().then((lot) => {
                res.status(200).json({ 'message': 'lot added' });
            }).catch((err) => {
                res.status(400).json({ 'message': err });
            });
        };
        this.updateLot = (req, res) => {
            let id = req.body.id;
            let description = req.body.description;
            let city = req.body.city;
            let district = req.body.district;
            let street = req.body.street;
            let number = req.body.number;
            let type = req.body.type;
            let floors = req.body.floors;
            let sqMeters = req.body.sqMeters;
            let rooms = req.body.rooms;
            let equipped = req.body.equipped;
            let rent = req.body.rent;
            let price = req.body.price;
            let approved = req.body.approved;
            let promoted = req.body.promoted;
            let sold = req.body.sold;
            let images = req.body.images;
            let video = req.body.video;
            lot_1.default.collection.findOneAndUpdate({ 'id': id }, { $set: { 'description': description, 'city': city, 'district': district, 'street': street, 'number': number, 'type': type, 'floors': floors,
                    'sqMeters': sqMeters, 'rooms': rooms, 'equipped': equipped, 'rent': rent, 'price': price, 'approved': approved, 'promoted': promoted, 'sold': sold, 'images': images, 'video': video } }, (err, lot) => {
                if (err)
                    console.log(err);
                else
                    res.json(lot);
            });
        };
        this.findByOwner = (req, res) => {
            let owner = req.body.owner;
            lot_1.default.find({ 'owner': owner }, (err, lot) => {
                if (err)
                    console.log(err);
                else
                    res.json(lot);
            });
        };
        this.deleteByID = (req, res) => {
            let id = req.body.id;
            lot_1.default.findOneAndDelete({ 'id': id }, (err, lot) => {
                if (err)
                    console.log(err);
                else
                    res.json(lot);
            });
        };
    }
}
exports.LotController = LotController;
//# sourceMappingURL=lot.controller.js.map