import mongoose from 'mongoose'

const Schema = mongoose.Schema

let Rent = new Schema(
    {
        id: {
            type: Number
        },
        approved: {
            type: Boolean
        },
        ownerApproved: {
            type: Boolean
        },
        lotID: {
            type: Number
        },
        startDate: {
            type: String
        },
        endDate: {
            type: String
        },
        totalPrice: {
            type: Number
        },
        proposer: {
            type: String
        },
        profit: {
            type: Number
        }
    }
)

export default mongoose.model('Rent', Rent, 'rents')