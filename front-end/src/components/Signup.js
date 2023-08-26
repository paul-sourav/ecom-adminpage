import React, { useState, useEffect } from "react";
import "../css/Signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("users");
    if (auth) {
      navigate("/");
    }
  });

  async function getdata(e) {
    e.preventDefault();

    let result = await fetch("http://localhost:5000/register",{
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: { "content-type": "application/json" },
    });
    navigate("/login");
    result = await result.json();
    console.log(result);
    localStorage.setItem("users", JSON.stringify(result));
  }

  return (
    <div className="form">
      <h2>Register</h2>

      <form onSubmit={getdata}>

        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
        ></input>

        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Example@mail.com"
        ></input>

        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        ></input>

        <button type="submit" className="btn">
          Submit
        </button>
        
      </form>
    </div>
  );
};

export default Signup;
