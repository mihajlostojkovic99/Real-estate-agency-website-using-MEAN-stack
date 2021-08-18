"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let BuyRequest = new Schema({
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
});
exports.default = mongoose_1.default.model('BuyRequest', BuyRequest, 'buyRequests');
//# sourceMappingURL=buyRequest.js.map