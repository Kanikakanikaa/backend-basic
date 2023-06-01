const { DataTypes } = require("sequelize");
const sequelize = require("../connection")


  const Users = sequelize.define(
    "USERS",
    {
      name: {
        type: DataTypes.STRING,
        //setter
        set(val){
        this.setDataValue("name",val+"Rani")
        }
      },
      email: {
        type: DataTypes.STRING,
        get(){
        return this.getDataValue("email","kk"+this.name)
        }
      },
      age: {
        type: DataTypes.INTEGER,
      },
    },
    {
      // timestamps:false,
      // createdAt:false,
      updatedAt: false,
      // engine: "myEngine",
    }
  );

  module.exports = Users;


