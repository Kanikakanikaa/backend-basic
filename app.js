const express= require("express");
require("./connection")
const app= express();
const port =8080;
const ctrl= require("./controller/userController");
const crudOpertaions=require("./controller/crud");
const operators=require("./operators/condition");
const findMethod=require("./finders");
const { json } = require("body-parser");

app.get("/",function(req,resp){
    resp.send("home")
});
 app.get("/user", async (req, res, next) => {
     const data = await ctrl.addUser()
    res.send(JSON.stringify(data))
 });

 app.get("/crud",crudOpertaions.crud);
 app.get("/op",operators.conditionally);
 app.get("/finders",findMethod.findMethods);
app.listen(port,()=>{
    console.log(`App is running at port ${port}`)
})