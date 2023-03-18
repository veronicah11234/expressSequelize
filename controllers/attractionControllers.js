import db from "../models/index.js";

const Attraction = db.Attraction;

const getAllAttraction = async (req, res) => {

}

const getAttractionById = async (req, res) => {

}

export const createAttraction = async (req, res) => {
    try {
        const response = await Role.create(req.body);
        res.status(201).json({"message": "Attraction created."});
    } catch (error) {
        res.status(401).json(error);
    }
}

const updateAttractionById = async (req, res) => {

}

const deleteAttractionById = async (req, res) => {

}