import db from "../models/index.js";

const Tours = db.Tours;

const getAllTours = async (req, res) => {

}

const getToursById = async (req, res) => {

}

export const createTours = async (req, res) => {
    try {
        const response = await Role.create(req.body);
        res.status(201).json({"message": "Tours created."});
    } catch (error) {
        res.status(401).json(error);
    }
}

const updateToursById = async (req, res) => {

}

const deleteToursById = async (req, res) => {

}