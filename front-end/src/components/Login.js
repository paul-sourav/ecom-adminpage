import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Signup.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("users");
    if (auth) {
      navigate("/");
    }
  });

  const myfun = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError(true);
      return false;
    }

    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: { "content-type": "application/json" },
    });
    result = await result.json();
    console.log(result);
    if (result.name) {
      localStorage.setItem("users", JSON.stringify(result));
      navigate("/");
    } else {
      alert("no user found");
    }
  };

  return (
    <div className="form">
      <form onSubmit={myfun}>
        <h2>Login</h2>

        <input
          type="text"
          name="email"
          placeholder="Example@mail.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <span style={{ color: "red" }}>
          {error && !email ? "plase enter email" : null}
        </span>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <span style={{ color: "red" }}>
          {error && !password ? "plase enter your password" : null}
        </span>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
