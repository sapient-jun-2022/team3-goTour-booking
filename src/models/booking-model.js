import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const BookingSchema = new Schema({
    user: {
        type: String,
    },
    bookings:
    [
       {
        bookingId: Number,
        booking: String, 
        source: String,
        booking_date:{
            type: Date,
            default: Date.now
        },
        travel: { start:Date, end:Date },
        people : [String]
       }
    ],
    payments: [
        {
            invoice_number: Number,
            payment_method: String,
            payment_date: Date,
            amount:Number
        }
    ]  
});