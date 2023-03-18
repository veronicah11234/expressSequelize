import { DataTypes } from 'sequelize';

const Reviews = (sequelize, Sequelize) => {
    const Reviews = sequelize.define("reviews", {
     reviewer_id:{
        type:DataTypes.STRING,
        allowNull:false

    },
    reviewer_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    image_URL:{
        type:DataTypes.STRING,
        allowNull:false
    },
    time:{
        type:DataTypes.STRING,
        allowNull:false

    },
    description:{
        type:DataTypes.STRING,
        allowNull:false

    },
    check_in_time:{
        type:DataTypes.STRING,
        allowNull:false

    },
    check_out_time:{
        type:DataTypes.STRING,
        allowNull:false

    },
    price:{
        type:DataTypes.STRING,
        allowNull:false
    }
    });
    return Reviews;
  };

  export default Reviews;