"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Lot = new Schema({
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
});
exports.default = mongoose_1.default.model('Lot', Lot, 'lots');
//# sourceMappingURL=lot.js.map