import express from 'express'
import { BuyRequestController } from '../controllers/BuyRequest.controller'
import { RentController } from '../controllers/rent.controller'


const buyRequestRouter = express.Router()

buyRequestRouter.route('/getAllBuyRequests').get(
    (req, res)=>new BuyRequestController().getAllBuyRequests(req, res)
)

buyRequestRouter.route('/getBuyRequestsForID').post(
    (req, res)=>new BuyRequestController().getBuyRequestsForID(req, res)
)

buyRequestRouter.route('/addBuyRequest').post(
    (req, res)=>new BuyRequestController().addBuyRequest(req, res)
)

buyRequestRouter.route('/ownerApproveBuyRequest').post(
    (req, res)=>new BuyRequestController().ownerApproveBuyRequest(req, res)
)

buyRequestRouter.route('/agentApproveBuyRequest').post(
    (req, res)=>new BuyRequestController().agentApproveBuyRequest(req, res)
)

buyRequestRouter.route('/deleteBuyRequest').post(
    (req, res)=>new BuyRequestController().deleteBuyRequest(req, res)
)

export default buyRequestRouter