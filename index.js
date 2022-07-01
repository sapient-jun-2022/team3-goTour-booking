import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/booking-routes';

require('dotenv').config()

const app = express();
const port = process.env.PORT;
const mongoUri = process.env.MONGODB_URI;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({type:"application/json"}));

mongoose.Promise = global.Promise;
mongoose.connect(mongoUri, {useNewUrlParser: true});

routes(app);

app.listen(port, () => {
    console.log('example app is listening at' + port)
})

