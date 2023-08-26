 const express = require("express");
const Proute = express.Router();

const Pmodel = require("../database/productData");

Proute.get("/product", async (req, resp) => {
  const data = await Pmodel.find();
  resp.render("productdata", { data: data });
});

Proute.post("/add-product", async (req, resp) => {
  try {
    const product = new Pmodel(req.body);
    const saveProduct = await product.save();
    console.log(saveProduct);
    resp.send(saveProduct);
  } catch (error) {
    console.log(error);
  }
});

Proute.get("/products", async (req, resp) => {
  const data = await Pmodel.find();
  if (data.length > 0) {
    resp.send(data);
  } else {
    resp.send({ result: "no data found" });
  }
});

Proute.delete("/product/:id", async (req, resp) => {
  let data = await Pmodel.deleteOne({ _id: req.params.id });
  resp.send(data);
  console.log(data);
});

Proute.get("/product/:id", async (req, resp) => {
  try {
    let data = await Pmodel.findOne({ _id: req.params.id });
    resp.send(data);
  } catch (error) {
    resp.send({ result: "no data found" });
  }
});

Proute.put("/update/:id", async (req, resp) => {
  const data = await Pmodel.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  console.log(data);
  resp.send(data);
});

Proute.get("/search/:key", async (req, resp) => {
  const data = await Pmodel.find({
    $or: [
      { name: { $regex: req.params.key} },
      { company: { $regex: req.params.key} },
        
    ],
  });
  resp.send(data);
});

module.exports = Proute;
