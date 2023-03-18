import db from "../models/index.js";

const Reviews = db.Reviews;

const getAllReviews = async (req, res) => {

}

const getReviewsById = async (req, res) => {

}

export const createReviews = async (req, res) => {
    try {
        const response = await Role.create(req.body);
        res.status(201).json({"message": "Reviews created."});
    } catch (error) {
        res.status(401).json(error);
    }
}

const updateReviewsById = async (req, res) => {

}

const deleteReviewsById = async (req, res) => {

}