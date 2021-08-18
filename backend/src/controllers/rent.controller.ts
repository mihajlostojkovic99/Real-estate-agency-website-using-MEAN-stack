import express from 'express'
import rent from '../models/rent'
import Rent from '../models/rent'

export class RentController {
    getAllRents = (req: express.Request, res: express.Response)=>{
        Rent.find({}, (err, lot)=>{
            if (err) console.log(err)
            else res.json(lot)
        })
    }

    getRentsForID = (req: express.Request, res: express.Response)=>{
        let id = req.body.id

        Rent.find({'lotID': id}, (err, lot)=>{
            if (err) console.log(err)
            else res.json(lot)
        })
    }

    addRent = (req: express.Request, res: express.Response)=>{
        let rent = new Rent(req.body)

        rent.save().then((rent)=>{
            res.status(200).json({'message': 'rent added'})
        }).catch((err)=>{
            res.status(400).json({'message': err})
        })
    }

    ownerApproveRent = (req: express.Request, res: express.Response)=>{
        let id = req.body.id
        let profit = req.body.profit

        Rent.collection.findOneAndUpdate({'id': id},{$set: {'ownerApproved': true, 'profit': profit}}, (err, rent)=>{
            if (err) console.log(err)
            else res.json(rent)
        })
    }

    agentApproveRent = (req: express.Request, res: express.Response)=>{
        let id = req.body.id

        Rent.collection.findOneAndUpdate({'id': id},{$set: {'approved': true, 'ownerApproved': true}}, (err, rent)=>{
            if (err) console.log(err)
            else res.json(rent)
        })
    }

    deleteRent = (req: express.Request, res: express.Response)=>{
        let id = req.body.id

        Rent.findOneAndDelete({'id': id}, (err)=>{
            if (err) console.log(err)
            else res.json({'message': 'ok'})
        })
    }
}