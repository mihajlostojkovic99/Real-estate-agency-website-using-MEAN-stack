import express from 'express'
import { RentController } from '../controllers/rent.controller'


const rentRouter = express.Router()

rentRouter.route('/getAllRents').get(
    (req, res)=>new RentController().getAllRents(req, res)
)

rentRouter.route('/getRentsForID').post(
    (req, res)=>new RentController().getRentsForID(req, res)
)

rentRouter.route('/addRent').post(
    (req, res)=>new RentController().addRent(req, res)
)

rentRouter.route('/ownerApproveRent').post(
    (req, res)=>new RentController().ownerApproveRent(req, res)
)

rentRouter.route('/agentApproveRent').post(
    (req, res)=>new RentController().agentApproveRent(req, res)
)

rentRouter.route('/deleteRent').post(
    (req, res)=>new RentController().deleteRent(req, res)
)

export default rentRouter