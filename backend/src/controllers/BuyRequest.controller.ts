import express from 'express'
import BuyRequest from '../models/buyRequest'
import Rent from '../models/rent'

export class BuyRequestController {
    getAllBuyRequests = (req: express.Request, res: express.Response)=>{
        BuyRequest.find({}, (err, buyRequest)=>{
            if (err) console.log(err)
            else res.json(buyRequest)
        })
    }

    getBuyRequestsForID = (req: express.Request, res: express.Response)=>{
        let id = req.body.id

        BuyRequest.find({'lotID': id}, (err, BuyRequest)=>{
            if (err) console.log(err)
            else res.json(BuyRequest)
        })
    }

    addBuyRequest = (req: express.Request, res: express.Response)=>{
        let buyRequest = new BuyRequest(req.body)

        buyRequest.save().then((buyRequest)=>{
            res.status(200).json({'message': 'rent added'})
        }).catch((err)=>{
            res.status(400).json({'message': err})
        })
    }

    ownerApproveBuyRequest = (req: express.Request, res: express.Response)=>{
        let id = req.body.id
        let profit = req.body.profit

        BuyRequest.collection.findOneAndUpdate({'id': id},{$set: {'ownerApproved': true, 'profit': profit}}, (err, rent)=>{
            if (err) console.log(err)
            else res.json(rent)
        })
    }

    agentApproveBuyRequest = (req: express.Request, res: express.Response)=>{
        let id = req.body.id

        BuyRequest.collection.findOneAndUpdate({'id': id},{$set: {'approved': true, 'ownerApproved': true}}, (err, rent)=>{
            if (err) console.log(err)
            else res.json(rent)
        })
    }

    deleteBuyRequest = (req: express.Request, res: express.Response)=>{
        let id = req.body.id

        BuyRequest.findOneAndDelete({'id': id}, (err)=>{
            if (err) console.log(err)
        })
    }
}