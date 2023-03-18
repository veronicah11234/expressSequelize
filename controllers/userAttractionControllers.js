import db from "../models/index.js";

const UserAttraction = db.UserAttraction;

const getAllUserAttraction = async (req, res) => {

}

const getUserAttractionById = async (req, res) => {

}

export const createUserAttraction = async (req, res) => {
    try {
        const response = await UserAttraction.create(req.body);
        res.status(201).json({"message": "UserAttraction created."});
    } catch (error) {
        res.status(401).json(error);
    }
}

const updateUserAttractionById = async (req, res) => {

}

const deleteUserAttractionById = async (req, res) => {

}