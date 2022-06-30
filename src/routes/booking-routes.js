import {home} from "../controllers/booking-controller";
import {
    getAllBooking, 
    addBooking, 
    getBookingById, 
    updateBooking, 
    deleteBooking
} from '../controllers/booking-controller';

const routes = (app) => {
    app.route("/")
        .get(home);

    app.route('/booking')
        .get(getAllBooking)
        .post((req, res, next) => {
            console.log("you invoked POST Method");
            console.log("Request From : ", req.originalUrl);
            console.log("Method req go : ", req.method);
            console.log('req.body', req.body);
            next();
        }, addBooking);

    app.route('/booking/:bookingId')
        .get(getBookingById)
        .put(updateBooking)
        .delete(deleteBooking);
}

export default routes;