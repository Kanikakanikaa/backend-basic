const { Op } = require("sequelize");
const Users = require("./scehma/model")

const findMethods=async(req,res)=>{
//findByPk
//findAll
//findOne
//find or count
//find or create

// const  data= await Users.findByPk(3);
// const data= await Users.findAll({});
// const data= await Users.findOne({});
// const data= await Users.findAndCountAll({
//     where:{
//         name:{
//             [Op.like]:"abc"
//         }
//     }
// });
//created parameter return check already exist or not
const [data,created]= await Users.findOrCreate({
    where:{
        name:{
            [Op.like]:"kanika"
        }
    },
    //if not find then create
    defaults:{name:"kanika",email:"kk@gmail.com",age:5}
});
    let response={
        data:data,
        add:created
    }
    
    res.status(200).json(response)
}
module.exports={findMethods}