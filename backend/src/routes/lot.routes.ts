import express from 'express'
import { LotController } from '../controllers/lot.controller'


const lotRouter = express.Router()

lotRouter.route('/getAllLots').get(
    (req, res)=>new LotController().getAllLots(req, res)
)

lotRouter.route('/searchCity').post(
    (req, res)=>new LotController().searchCity(req, res)
)

lotRouter.route('/findByID').post(
    (req, res)=>new LotController().findByID(req, res)
)

lotRouter.route('/addLot').post(
    (req, res)=>new LotController().addLot(req, res)
)

lotRouter.route('/updateLot').post(
    (req, res)=>new LotController().updateLot(req, res)
)

lotRouter.route('/findByOwner').post(
    (req, res)=>new LotController().findByOwner(req, res)
)

lotRouter.route('/deleteByID').post(
    (req, res)=>new LotController().deleteByID(req, res)
)

export default lotRouter