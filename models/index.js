import { Sequelize } from 'sequelize';

import sequelize from '../config/db.js';

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

import User from './User.js';
db.User = User(sequelize, Sequelize);

import Attraction from './Attraction.js';
db.Attraction = Attraction(sequelize, Sequelize);

import Accommodation from './Accommodation.js';
db.Accommodation = Accommodation(sequelize, Sequelize);

import Booking from './Booking.js';
db.Booking = Booking(sequelize, Sequelize);

import Tours from './Tours.js';
db.Tours = Tours(sequelize, Sequelize);

import Reviews from './Reviews.js';
db.Reviews = Reviews(sequelize, Sequelize);

import UserAttraction from "./UserAttraction.js";
db.UserAttraction = UserAttraction(sequelize, Sequelize);

//Role & User has Many-To-Many Relationship
db.Attraction.belongsToMany(db.User, {
  through: "user_attraction",
  foreignKey: "attraction_id",
  otherKey: "user_id"
});

db.User.belongsToMany(db.Attraction, {
  through: "user_attraction",
  foreignKey: "user_id",
  otherKey: "attraction_id"
});

//User & Student has One-To-One Relationship
db.User.hasOne(db.Accommodation);

db.Accommodation.belongsTo(db.User, {
    foreignKey: "accommodation_id"
});

//Student & Course has Many-To-Many Relationship
db.Accommodation.belongsToMany(db.Booking, {
    through: "accommodation_booking",
    foreignKey: "accommodation_id",
    otherKey: "booking_id"
  });

  db.Booking.belongsToMany(db.Accommodation, {
    through: "accommodation_booking",
    foreignKey: "booking_id",
    otherKey: "accommodation_id"
  });

export default db;