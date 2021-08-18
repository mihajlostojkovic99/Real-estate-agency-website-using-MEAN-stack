"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
//import user from '../models/user'
const user_1 = __importDefault(require("../models/user"));
const registration_1 = __importDefault(require("../models/registration"));
class UserController {
    constructor() {
        this.login = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            user_1.default.findOne({ 'username': username, 'password': password }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.addUser = (req, res) => {
            let user = new user_1.default(req.body);
            user.save().then((user) => {
                res.status(200).json({ 'message': 'user added' });
            }).catch((err) => {
                res.status(400).json({ 'message': err });
            });
        };
        this.register = (req, res) => {
            let reg = new registration_1.default(req.body);
            reg.save().then((user) => {
                res.status(200).json({ 'message': 'user added' });
            }).catch((err) => {
                res.status(400).json({ 'message': err });
            });
        };
        this.getAllUsers = (req, res) => {
            user_1.default.find({}, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.getAllRegistrations = (req, res) => {
            registration_1.default.find({}, (err, registration) => {
                if (err)
                    console.log(err);
                else
                    res.json(registration);
            });
        };
        this.getRegistration = (req, res) => {
            let username = req.body.username;
            registration_1.default.findOne({ 'username': username }, (err, registration) => {
                if (err)
                    console.log(err);
                else
                    res.json(registration);
            });
        };
        this.deleteRegistration = (req, res) => {
            let username = req.body.username;
            registration_1.default.findOneAndDelete({ 'username': username }, (err, registration) => {
                if (err)
                    console.log(err);
                else
                    res.json(registration);
            });
        };
        this.deleteUser = (req, res) => {
            let username = req.body.username;
            user_1.default.findOneAndDelete({ 'username': username }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.updateUser = (req, res) => {
            let oldUsername = req.body.oldUsername;
            let newUsername = req.body.newUsername;
            let password = req.body.password;
            let name = req.body.name;
            let surname = req.body.surname;
            let email = req.body.email;
            let city = req.body.city;
            let country = req.body.country;
            let type = req.body.type;
            let picture = req.body.picture;
            user_1.default.collection.findOneAndUpdate({ 'username': oldUsername }, { $set: { 'username': newUsername, 'password': password, 'name': name,
                    'surname': surname, 'email': email, 'city': city, 'country': country, 'type': type, 'picture': picture } }, (err) => {
                if (err)
                    console.log(err);
            });
        };
        this.getAdmin = (req, res) => {
            let type = 3;
            user_1.default.findOne({ 'type': type }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.updatePercents = (req, res) => {
            let username = req.body.username;
            let sell = req.body.sell;
            let rent = req.body.rent;
            user_1.default.collection.findOneAndUpdate({ 'username': username }, { $set: { 'sell': sell, 'rent': rent } }, (err) => {
                if (err)
                    console.log(err);
            });
        };
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map