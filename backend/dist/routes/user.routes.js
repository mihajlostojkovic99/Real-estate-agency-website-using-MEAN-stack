"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const userRouter = express_1.default.Router();
userRouter.route('/login').post((req, res) => new user_controller_1.UserController().login(req, res));
userRouter.route('/addUser').post((req, res) => new user_controller_1.UserController().addUser(req, res));
userRouter.route('/register').post((req, res) => new user_controller_1.UserController().register(req, res));
userRouter.route('/getAllRegistrations').get((req, res) => new user_controller_1.UserController().getAllRegistrations(req, res));
userRouter.route('/getAllUsers').get((req, res) => new user_controller_1.UserController().getAllUsers(req, res));
userRouter.route('/getRegistration').post((req, res) => new user_controller_1.UserController().getRegistration(req, res));
userRouter.route('/deleteRegistration').post((req, res) => new user_controller_1.UserController().deleteRegistration(req, res));
userRouter.route('/deleteUser').post((req, res) => new user_controller_1.UserController().deleteUser(req, res));
userRouter.route('/updateUser').post((req, res) => new user_controller_1.UserController().updateUser(req, res));
userRouter.route('/getAdmin').get((req, res) => new user_controller_1.UserController().getAdmin(req, res));
userRouter.route('/updatePercents').post((req, res) => new user_controller_1.UserController().updatePercents(req, res));
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map