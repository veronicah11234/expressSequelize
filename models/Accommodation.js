import { DataTypes } from 'sequelize';

const Accommodation= (sequelize, Sequelize) => {
    const Accommodation = sequelize.define("accommodation", {
      accommodation_id:{
        type:DataTypes.INTEGER,
        allowNull:false

    },
    accommodation_name:{
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
    return Accommodation;
  };

  export default Accommodation;