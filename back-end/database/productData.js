const mongoose  =  require("mongoose");
const connect = mongoose.connect("mongodb://0.0.0.0:27017/e-commerce");
connect.then((data)=>console.log("connected with mongoose")).catch((err)=>console.log(err));

const ProductSchema = new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    Price:{type:Number,required:true},
    category:{type:String,required:true},
    userid:{type:String,required:true},
    company:{type:String,required:true}
})

const ProductModel = mongoose.model("products",ProductSchema);

module.exports =ProductModel;