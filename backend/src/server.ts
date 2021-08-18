import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import userRouter from './routes/user.routes';
import lotRouter from './routes/lot.routes';
import rentRouter from './routes/rent.routes';
import buyRequestRouter from './routes/BuyRequest.routes';

const app = express();

app.use(cors())

// app.use(bodyParser.json())
app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({limit: '100mb'}));

mongoose.connect('mongodb://localhost:27017/agencydb')
const connection = mongoose.connection
connection.once('open', ()=>{
    console.log('mongodb working')
})

const router = express.Router()
router.use('/users', userRouter)
router.use('/lots', lotRouter)
router.use('/rents', rentRouter)
router.use('/buyRequests', buyRequestRouter)

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));