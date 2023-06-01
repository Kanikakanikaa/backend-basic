
const { Sequelize } = require("sequelize")
const User=require("../scehma/model")


const crud =async(req,res)=>{
    // //insert
    // const data =  await User.create({name:"kk",email:"kk@gmail.com",age:6})

// //update
// const newData=  await User.update({name:"kk"},{
//     where:
//    { id:2}
// })

// // delete data
// const remove= await User.destroy({
//     where:{
//         // name:"kk",
//         id:8    
//     }
// })

// //truncate:dlt data inside but not table
// let data= await User.destroy({
//     truncate:true
// })

// //bulk
// let data= await User.bulkCreate([
//     {
//     name:"abc",age:7,email:"aa@gmail.com"
// },
// {
//     name:"abc",age:8,email:"bb@gmail.com"
// },
// {
//     name:"bbc",age:9,email:"cc@gmail.com"
// },
// {
//     name:"bca",age:7,email:"dd@gmail.com"
// },
// ])

//  //find:only find first
//  let data= await User.findOne({})
 
// // field:add only in specific fields
// const data= await User.build({name:"kk",email:"jkehfjkew",age:9});
// await data.save({fields:["age"]} );

//select: show some fields
// const data = await User.findAll({
//     attributes:["name",["email","emailId"],
//     // //for add field and add fun
//     // [Sequelize.fn("COUNT",Sequelize.col("email")),("totalEmails")]
//     //FOR CONCAT FIELD IN ADD strings
//     [Sequelize.fn("CONCAT",Sequelize.col("email"),"KK"),("totalEmails")]
// ]
// });

//INCLUDE-EXCLUDE
const data = await User.findAll({
    attributes:{
        //for hide field
 exclude:["createdAt"],
 //for show field
 include:[[Sequelize.fn("CONCAT",Sequelize.col("name"),"rani"),"fullName"]]
    }
});





    let response={
        data:data
    }
    res.status(200).json(response)

}
module.exports={crud}