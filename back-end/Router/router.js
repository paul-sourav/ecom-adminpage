  const express = require("express");
const router = express.Router();
const Model = require("../database/mongoose");

router.get("/", async (req, resp) => {
  const data = await Model.find();
  resp.render("showdata", { data: data });
});

router.post("/register", async (req,resp) => {
  try {
    const data = new Model(req.body);
    let result = await data.save();
    result = result.toObject();
    delete result.password;
    resp.send(result);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async(req,resp)=>{

    console.log(req.body);
    /* const user = await Model.findOne(req.body);
    console.log(user);
    if(!user){
        resp.send("no user found");
    }   
    if(user.password == req.body.password ){
        resp.send(user.set({password:""}))
    }else{
        resp.send("no password was entered")
    }  */
    const user = await Model.findOne(req.body).select("-password");
    if(req.body.password && req.body.email){
        if(user){
            resp.send(user);
        }else{
            resp.send({result:"no user found"})
        }
    }else{
         resp.send({result:"please enter your password"});
    }
})

router.delete("/delete",async(req,resp)=>{
  try {
    let data = await Model.deleteOne({_id:req.body.id});
    console.log(data);
    resp.send(data);
  } catch (error) {
    resp.send(error)
  }
})

module.exports = router;
