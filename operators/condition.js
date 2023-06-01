const { Op } = require("sequelize");
const Users = require("../scehma/model");

const conditionally = async (req, res) => {
  // //operatos
  // const data= await Users.findAll({
  //     where:{
  //         // //FOR Eqaul
  //         // id:{[Op.eq]:3}
  //         //for like the string -->% after
  //         name:{[Op.like]:"%bc"}
  //     }

  // });
  //orders
//   const data = await Users.findAll({
//     order: [
//       ["id", "DESC"],
//       ["name", "ASC"],
//     ],
//     //LIMIT
//     limit: 2,

//     //OFFSET
//     offset: 1, //after 1  record show

//         // //GROUP
//     // group: ["email"],

//   });

// //count
// const data= await Users.count({})


// //max,min,sum
// // const data= await Users.max("age")
// // const data= await Users.min("age")
// // const data= await Users.sum("age")
// const data= await Users.sum("age",{
//     where:{
//         age:{
//             [Op.gt]:7
//         }
//     }
// })

// increment-decrement
const data= await Users.increment({age:2},{
    where:{
id:{
    [Op.lt]:8
}
    }
});

  let response = {
    data: "operators",
    data,
  };

  res.status(200).json(response);
};

module.exports = { conditionally };
