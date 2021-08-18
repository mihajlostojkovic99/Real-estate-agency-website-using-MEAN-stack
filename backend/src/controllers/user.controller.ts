import express from 'express'
//import user from '../models/user'
import User from '../models/user'
import Registration from '../models/registration'

export class UserController {
    login = (req: express.Request, res: express.Response)=>{
        let username = req.body.username
        let password = req.body.password

        User.findOne({'username':username, 'password':password}, 
        (err, user)=>{
            if (err) console.log(err)
            else res.json(user)
        })
    }

    addUser = (req: express.Request, res: express.Response)=>{
        let user = new User(req.body)

        user.save().then((user)=>{
            res.status(200).json({'message': 'user added'})
        }).catch((err)=>{
            res.status(400).json({'message': err})
        })
    }

    register = (req: express.Request, res: express.Response)=>{
        let reg = new Registration(req.body)

        reg.save().then((user)=>{
            res.status(200).json({'message': 'user added'})
        }).catch((err)=>{
            res.status(400).json({'message': err})
        })

    }

    getAllUsers = (req: express.Request, res: express.Response)=>{
        User.find({}, (err, user)=>{
            if (err) console.log(err)
            else res.json(user)
        })
    }

    getAllRegistrations = (req: express.Request, res: express.Response)=>{
        Registration.find({}, (err, registration)=>{
            if (err) console.log(err)
            else res.json(registration)
        })
    }

    getRegistration = (req: express.Request, res: express.Response)=>{
        let username = req.body.username

        Registration.findOne({'username':username}, (err, registration)=>{
            if (err) console.log(err)
            else res.json(registration)
        })     
    }

    deleteRegistration = (req: express.Request, res: express.Response)=>{
        let username = req.body.username
        
        Registration.findOneAndDelete({'username':username}, (err, registration)=>{
            if (err) console.log(err)
            else res.json(registration)
        })
    }

    deleteUser = (req: express.Request, res: express.Response)=>{
        let username = req.body.username
        
        User.findOneAndDelete({'username':username}, (err, user)=>{
            if (err) console.log(err)
            else res.json(user)
        })
    }

    updateUser = (req: express.Request, res: express.Response)=>{
        let oldUsername = req.body.oldUsername
        let newUsername = req.body.newUsername
        let password = req.body.password
        let name = req.body.name
        let surname = req.body.surname
        let email = req.body.email
        let city = req.body.city
        let country = req.body.country
        let type = req.body.type
        let picture = req.body.picture
        
        User.collection.findOneAndUpdate({'username': oldUsername}, {$set: {'username': newUsername, 'password': password, 'name': name,
            'surname': surname, 'email': email, 'city': city, 'country': country, 'type': type, 'picture': picture}}, (err)=>{
                if (err) console.log(err)
            })
    }
    
    getAdmin = (req: express.Request, res: express.Response)=>{

        let type = 3

        User.findOne({'type': type}, (err, user)=>{
            if (err) console.log(err)
            else res.json(user)
        })
    }

    updatePercents = (req: express.Request, res: express.Response)=>{
        let username = req.body.username
        let sell = req.body.sell
        let rent = req.body.rent
        
        User.collection.findOneAndUpdate({'username': username}, {$set: {'sell': sell, 'rent': rent}}, (err)=>{
                if (err) console.log(err)
            })
    }
}