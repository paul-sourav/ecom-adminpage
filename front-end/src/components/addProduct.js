import React,{useEffect, useState}  from "react";
import "../css/Signup.css"

const  AddProduct = ()=>{
    const [name,setName] = useState("");
    const [Price,setPrice]= useState("");
    const [category,setCategory]=useState("");
    const [userid,setUserid]= useState("");
    const [company,setCompany] = useState("");
    const [error,setError] = useState(false);

    useEffect(()=>{
        const Id  = JSON.parse(localStorage.getItem("users"))._id;
        setUserid(Id);
    },[])

    const  myfun =async(e)=>{
        e.preventDefault();

        if(!name || !Price || !category || !company ){
            alert("please check your input field");
            setError(true);
            return false;
        }

        let result = await fetch("http://localhost:5000/add-product",{
            method:"post",
            body:JSON.stringify({name,Price,category,userid,company}),
            headers:{"Content-Type":"application/json"}
           
        });
        result =  await result.json()
        console.log(result.name)
        alert("submited")
    }
    return(
    
            <div className="form">
                <h2>Add Product</h2>
                <form onSubmit={myfun}>
                    <input type="text"  placeholder="Name" onChange={(e)=>{setName(e.target.value)}}></input>

                    <span style={{color:"red"}}>{error&& !name? "plase enter product name":null}</span>

                    <input type="number"  placeholder="Price"onChange={(e)=>{setPrice(e.target.value)}}></input>

                    <span style={{color:"red"}}>{error&& !Price? "please enter product Price *":null}</span>

                    <input type="text"  placeholder="category"onChange={(e)=>{setCategory(e.target.value)}}></input>

                    <span style={{color:"red"}}>{error&& !category? "plase enter product Category":null}</span>

                    <input type="text"  placeholder="company"onChange={(e)=>{setCompany(e.target.value)}}></input>
                    <span style={{color:"red"}}>{error&& !company? "plase enter product comapany":null}</span>

                    <button type="submit" className="btn">
                        Submit
                    </button>
                </form>
            </div>
    )
}
export default AddProduct;