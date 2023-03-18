import db from "../models/index.js";

const Booking= db.Booking;

const getAllBooking = async (req, res) => {

}

const getBookingById = async (req, res) => {

}

export const createBooking = async (req, res) => {
    try {
        const response = await Role.create(req.body);
        res.status(201).json({"message": "Booking created."});
    } catch (error) {
        res.status(401).json(error);
    }
}

const updateBookingById = async (req, res) => {

}

const deleteBookingById = async (req, res) => {

}