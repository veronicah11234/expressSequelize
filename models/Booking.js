import { DataTypes } from 'sequelize';

const Booking = (sequelize, Sequelize) => {
    const Booking = sequelize.define("booking", {
     booking_id:{
        type:DataTypes.STRING,
        allowNull:false

    },
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    restaraunt_id:{
        type:DataTypes.STRING,
        allowNull:false
    },
    booking_number:{
        type:DataTypes.STRING,
        allowNull:false

    },
    booking_time:{
        type:DataTypes.STRING,
        allowNull:false

    },
    description:{
        type:DataTypes.STRING,
        allowNull:false

    },
    price:{
        type:DataTypes.STRING,
        allowNull:false
    }
    });
    return Booking;
  };

  export default Booking;