import React from "react";
import { Link, useNavigate } from "react-router-dom";
import  logo  from "../images/logo.png"

const Nav = () => {
  const auth = localStorage.getItem("users");
  const navigate = useNavigate();
/*   const w = window.innerWidth;
  console.log(w) */

  return (
    <div className="Nav">

    <img src={logo} alt="logo" width={"119.49000000000001px"}/>

      {auth ? (
        <>
          <Link to={"/"}>
            <li>Products</li>
          </Link>
          <Link to={"/add"}>
            <li>add Products</li>
          </Link>
        </>
      ) : null}

      <Link to={"/profile"}>
        {auth ? (
          <li
            onClick={() => {
              navigate("/profile");
            }}
          >
            profile
          </li>
        ) : null}
      </Link>



      {auth ? null : (
        <>
          <li>
            <Link to={"/signup"}>Signup</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </>
      )}
    </div>
  );
};

export default Nav;
