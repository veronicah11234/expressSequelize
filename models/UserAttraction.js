import { DataTypes } from 'sequelize';

const UserAttraction = (sequelize, Sequelize) => {
    const UserAttraction= sequelize.define("user_attraction", {
      attraction_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }

    });
    return UserAttraction;
  };

  export default UserAttraction;