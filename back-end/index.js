const express = require("express");
const app = express();
const router = require("./Router/router")
const Cors  =  require('cors');
const ProductRoute = require("./Router/productRoute")
app.use(express.json());
app.set("view engine","ejs");
app.use(Cors());




app.use(ProductRoute);
app.use(router);
app.listen(5000, (err) => {
    if (err) throw err
    console.log("connected at port  5000")
})
