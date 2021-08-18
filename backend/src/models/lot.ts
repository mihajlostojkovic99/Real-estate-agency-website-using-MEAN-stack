import mongoose from 'mongoose'

const Schema = mongoose.Schema

let Lot = new Schema(
    {
        id: {
            type: Number
        },
        description: {
            type: String
        },
        city: {
            type: String
        },
        district: {
            type: String
        },
        street: {
            type: String
        },
        number: {
            type: String
        },
        type: {
            type: String
        },
        floors: {
            type: String
        },
        sqMeters: {
            type: String
        },
        rooms: {
            type: String
        },
        equipped: {
            type: Boolean
        },
        rent: {
            type: Boolean
        },
        price: {
            type: Number
        },
        owner: {
            type: String
        },
        approved: {
            type: Boolean
        },
        promoted: {
            type: Boolean
        },
        sold: {
            type: Boolean
        },
        images: {
            type: Array
        },
        video: {
            type: String
        }
    }
)

export default mongoose.model('Lot', Lot, 'lots')