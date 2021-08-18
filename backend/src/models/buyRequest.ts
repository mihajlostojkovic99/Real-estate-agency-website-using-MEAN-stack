import mongoose from 'mongoose'

const Schema = mongoose.Schema

let BuyRequest = new Schema(
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
        price: {
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

export default mongoose.model('BuyRequest', BuyRequest, 'buyRequests')