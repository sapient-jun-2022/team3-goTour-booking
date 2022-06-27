import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/booking-routes';

const app = express();
const port = 3000;

routes(app);

app.listen(port, () => {
    console.log('example app is listening at' + port)
})