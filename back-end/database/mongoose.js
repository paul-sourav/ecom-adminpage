const  mongoose =require("mongoose");
const  connect  = mongoose.connect("mongodb://0.0.0.0:27017/e-commerce")
connect.then((data)=>{
    console.log("we  are connected with mongo")
}).catch((err)=>{
    console.log(err)
});

const  Schema  = new mongoose.Schema({
    name :{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})

const Model = mongoose.model("users",Schema);

module.exports = Model;