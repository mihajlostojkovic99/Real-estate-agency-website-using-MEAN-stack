import express from 'express'
import { UserController } from '../controllers/user.controller'
const userRouter = express.Router()

userRouter.route('/login').post(
    (req, res)=>new UserController().login(req, res)
)

userRouter.route('/addUser').post(
    (req, res)=>new UserController().addUser(req, res)
)

userRouter.route('/register').post(
    (req, res)=>new UserController().register(req, res)
)

userRouter.route('/getAllRegistrations').get(
    (req, res)=>new UserController().getAllRegistrations(req, res)
)

userRouter.route('/getAllUsers').get(
    (req, res)=>new UserController().getAllUsers(req, res)
)

userRouter.route('/getRegistration').post(
    (req, res)=>new UserController().getRegistration(req, res)
)

userRouter.route('/deleteRegistration').post(
    (req, res)=>new UserController().deleteRegistration(req, res)
)

userRouter.route('/deleteUser').post(
    (req, res)=>new UserController().deleteUser(req, res)
)

userRouter.route('/updateUser').post(
    (req, res)=>new UserController().updateUser(req, res)
)

userRouter.route('/getAdmin').get(
    (req, res)=>new UserController().getAdmin(req, res)
)

userRouter.route('/updatePercents').post(
    (req, res)=>new UserController().updatePercents(req, res)
)

export default userRouter