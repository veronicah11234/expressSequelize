import { DataTypes } from 'sequelize';

const Attraction = (sequelize, Sequelize) => {
    const Attraction = sequelize.define("attraction", {
     attraction_id:{
        type:DataTypes.STRING,
        allowNull:false

    },
    attraction_name:{
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
    return Attraction;
  };

  export default Attraction;