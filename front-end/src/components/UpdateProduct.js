import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    console.log(params);
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "get",
    });
    result = await result.json();
    setName(result.name);
    setPrice(result.Price);
    setCategory(result.category);
    setCompany(result.company);
  };

  const myfun = async (e) => {
    e.preventDefault();
    let result = await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "put",
      body: JSON.stringify({ name, Price, category, company }),
      headers: { "content-type": "application/json" },
    });
    result = await result.json();
    if (result.modifiedCount > 0) {
      console.log(result);
      navigate("/");
      alert("1 data updated");
    } else {
      alert("no data updated");
    }
  };

  return (
    <div className="form">
      <h2>Update Product</h2>
      <form onSubmit={myfun}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>

        <input
          type="number"
          placeholder="Price"
          value={Price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>

        <input
          type="text"
          placeholder="category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        ></input>

        <input
          type="text"
          placeholder="company"
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        ></input>

        <button type="submit" className="btn">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
