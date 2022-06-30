import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/booking-routes';

require('dotenv').config()

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({type:"application/json"}));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/sap_db', {useNewUrlParser: true});

routes(app);

app.listen(port, () => {
    console.log('example app is listening at' + port)
})

