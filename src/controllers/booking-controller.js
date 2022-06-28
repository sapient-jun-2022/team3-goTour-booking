import mongoose from "mongoose";
import { BookingSchema } from "../models/booking-model";


const Booking = mongoose.model('gotravelbooking', BookingSchema)

// addBooking
export const addBooking = (req, res) => {
    let newBooking = new Booking(req.body);
    console.log("request", req.body);
    newBooking.save((err, booking) => {
        if(err){
            res.send(err);
        }
        console.log(booking);
        res.json(booking)
    })
}

// getAllPayment
export const getAllBooking = (req, res) => {
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

// getBookingByUser
export const getBookingByUser = (req, res) => {
    Booking.find({'user': req.params.user}, (err, booking) => {
        if(err){
            res.send(err)
        }
        res.json(booking)
    })
}

// updateBookingDetails
export const updateBooking = (req, res) => {
    Booking.findByIdAndUpdate({_id:req.params.bookingId}, req.body, {new:true}, (err, updateBooking) => {
        if(err){
            res.send(err);
        }
        res.json(booking)
    })
}

//delete 
export const deleteBooking = (req, res) => {
    Booking.findByIdAndDelete({ _id: req.params.bookingId }, (err, data) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: "Booking deleted successfully", data });
    })
}

export const home = (req, res, next) => {
    res.json({"message": "Welcome to express js" })
}

