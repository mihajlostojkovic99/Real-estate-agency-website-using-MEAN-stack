import express from 'express'
import Lot from '../models/lot'

export class LotController {
    getAllLots = (req: express.Request, res: express.Response)=>{
        Lot.find({}, (err, lot)=>{
            if (err) console.log(err)
            else res.json(lot)
        })
    }

    searchCity = (req: express.Request, res: express.Response)=>{
        let city: string = req.body.city

        if (city == '' || !city) {
            Lot.find({}, (err, lot)=>{
            if (err) console.log(err)
            else res.json(lot)
        })
        } else {
            Lot.find({'city': city}, (err, lot)=>{
            if (err) console.log(err)
            else res.json(lot)
        })
        }
    }

    findByID = (req: express.Request, res: express.Response)=>{
        let id = req.body.id
        
        Lot.findOne({'id': id}, (err, lot)=>{
        if (err) console.log(err)
        else res.json(lot)
        })
    }

    addLot = (req: express.Request, res: express.Response)=>{
        let lot = new Lot(req.body)

        lot.save().then((lot)=>{
            res.status(200).json({'message': 'lot added'})
        }).catch((err)=>{
            res.status(400).json({'message': err})
        })
    }

    updateLot = (req: express.Request, res: express.Response)=>{
        let id = req.body.id
        let description= req.body.description
        let city= req.body.city
        let district= req.body.district
        let street= req.body.street
        let number= req.body.number
        let type= req.body.type
        let floors= req.body.floors
        let sqMeters= req.body.sqMeters
        let rooms= req.body.rooms
        let equipped= req.body.equipped
        let rent= req.body.rent
        let price= req.body.price
        let approved= req.body.approved
        let promoted = req.body.promoted
        let sold = req.body.sold
        let images = req.body.images
        let video = req.body.video

        Lot.collection.findOneAndUpdate({'id': id}, {$set: {'description': description, 'city': city, 'district': district, 'street': street, 'number': number, 'type': type, 'floors': floors, 
        'sqMeters': sqMeters, 'rooms': rooms, 'equipped': equipped, 'rent': rent, 'price': price, 'approved': approved, 'promoted': promoted, 'sold': sold, 'images': images, 'video': video}}, (err, lot)=>{
            if (err) console.log(err)
            else res.json(lot)
        })
    } 

    findByOwner = (req: express.Request, res: express.Response)=>{
        let owner = req.body.owner
        
        Lot.find({'owner': owner}, (err, lot)=>{
        if (err) console.log(err)
        else res.json(lot)
        })
    }

    deleteByID = (req: express.Request, res: express.Response)=>{
        let id = req.body.id
        
        Lot.findOneAndDelete({'id': id}, (err, lot)=>{
        if (err) console.log(err)
        else res.json(lot)
        })
    }
}