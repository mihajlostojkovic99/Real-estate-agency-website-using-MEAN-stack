"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const lot_routes_1 = __importDefault(require("./routes/lot.routes"));
const rent_routes_1 = __importDefault(require("./routes/rent.routes"));
const BuyRequest_routes_1 = __importDefault(require("./routes/BuyRequest.routes"));
const app = express_1.default();
app.use(cors_1.default());
// app.use(bodyParser.json())
app.use(express_1.default.json({ limit: '100mb' }));
app.use(express_1.default.urlencoded({ limit: '100mb' }));
mongoose_1.default.connect('mongodb://localhost:27017/agencydb');
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('mongodb working');
});
const router = express_1.default.Router();
router.use('/users', user_routes_1.default);
router.use('/lots', lot_routes_1.default);
router.use('/rents', rent_routes_1.default);
router.use('/buyRequests', BuyRequest_routes_1.default);
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map