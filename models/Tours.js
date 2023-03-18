import { DataTypes } from 'sequelize';

const Tours = (sequelize, Sequelize) => {
    const Tours = sequelize.define("tours", {
     tour_id:{
        type:DataTypes.STRING,
        allowNull:false

    },
    tour_name:{
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
    return Tours;
  };

  export default Tours;