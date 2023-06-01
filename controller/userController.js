const Users = require("../scehma/model");
// console.log(Users,"inside")

const addUser = async (req, res) => {
  //   //to creeate new entry
    // let userData = await Users.build({ name: "kk1", email: "kk@gmail.com" });
    // // check intance creted or not
    // console.log(userData instanceof Users, "created");
    // await userData.save();

    //to creeate new entry
    let data = await Users.create({ name: "kanika", email: "kk@gmail.com" });

//   to update user
//     console.log(data.dataValues, "userData");
//   let newName= data.dataValues;
//   newName.name= "kanika"
//   await data.save();
  //to delete  entry
  // let data=await Users.destroy({
  //   where:{
  //     id:20
  //   }
  // })

  //to reload
  // data.dataValues.name = "kani";
  // // the name is still "Jane" in the database
  // await data.reload();
  // console.log(data.name);

  let response = {
    data: data.dataValues,
  };
  // res.status(200).json(response);
  return response
};

module.exports = { addUser };
