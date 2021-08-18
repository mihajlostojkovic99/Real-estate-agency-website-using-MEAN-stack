import mongoose from 'mongoose'

const Schema = mongoose.Schema

let User = new Schema(
    {
        name: {
            type: String
        },
        surname: {
            type: String
        },
        username: {
            type: String
        },
        password: {
            type: String
        },
        email: {
            type: String
        },
        city: {
            type: String
        },
        country: {
            type: String
        },
        type: {
            type: Number
        },
        rent: {
            type: Number
        },
        sell: {
            type: Number
        },
        picture: {
            type: String
        }

    }
)

export default mongoose.model('User', User, 'users')