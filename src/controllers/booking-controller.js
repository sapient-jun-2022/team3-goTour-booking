import mongoose from "mongoose";
import { BookingSchema } from "../models/booking-model";

const Booking = mongoose.model('Booking', BookingSchema)

// getAllBooking
export const addBooking = (req, res) => {
    let newBooking = new Booking(req.body);
    newBooking.save((err, booking) => {
        if(err){
            res.send(err);
        }
        res.json(booking)
    })
}

// getAllPayment
export const getAllBooking= (req, res) => {
    Booking.find({}, (err, bookings) => {
        if(err){
            res.send(err);
        }
        res.json(bookings);
    })
} 

//getBookingById

export const getBookingById = (req, res) => {
    Booking.findById(req.params.bookingId, (err, booking) => {
        if(err){
            res.send()
        }
        res.json(booking)
    })
}

export const getBookingByUser = (req, res) => {
    Booking.find({'user': req.params.user}, (err, booking) => {
        if(err){
            res.send(err)
        }
        res.json(booking)
    })
}

export const home = (req, res, next) => {
    res.json({"message": "Welcome to express js" })
}

