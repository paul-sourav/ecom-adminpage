import React, { useEffect, useState } from "react";
import "../css/Products.css";
import { Link } from "react-router-dom"


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
    }, []);

    const getProducts = async () => {
        let result = await fetch("http://localhost:5000/products");
        result = await result.json();
        setProducts(result);
    }

    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "delete",
        });
        result = await result.json();
        if (result) {
            alert(`deleted count : ${result.deletedCount}`);
            getProducts()
        }
    }

    const searchHandle = async (e) => {
        // console.log(e.target.value)
        let key = e.target.value;
        if (key) {
            let results = await fetch(`http://localhost:5000/search/${key}`,);
            results = await results.json();
            if (results) {
                setProducts(results);
            } else {
                console.log("no data found")
            }
        }else{
            getProducts()
        }
    }

    return (
        <div className="products" >
            <h1>products</h1>

            <input type="text" placeholder="Search product" className="searchBox" onChange={searchHandle} />

            <ul style={{ backgroundColor: "#009E60", fontWeight: "bold", color: "black" }}>
                <li>S.no</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Operations</li>
            </ul>
            {
              products.length>0 ? products.map((item, key) =>
                    <ul key={key}>
                        <li>{key + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.Price}$</li>
                        <li>{item.category}</li>
                        <li>
                            <button onClick={() => { deleteProduct(item._id) }}>Delete</button>
                            <Link to={`/update/${item._id}`}><button>Update</button></Link>
                        </li>
                    </ul>
                ):<h3>No Data Found</h3>
            }

        </div>
    )
}
export default Products;