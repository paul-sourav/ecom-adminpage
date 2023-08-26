import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/logout.css"

const Logout = () => {
  const navigate  = useNavigate()
  let auth = localStorage.getItem("users");
  const profileData = JSON.parse(auth);

  function cleardata() {
    localStorage.clear("users");
    navigate("/signup")
  }

  return (
    <div className="profile">
      <h1>profile page</h1>
      <img src=" http://placebeard.it/g/340x220" alt="profilepic"></img>
      <h2>{profileData.name.toUpperCase()}</h2>
      <p>{profileData._id}</p>
      <Link to={"/signup"}>
        <button onClick={cleardata}
          style={{ backgroundColor: "navy", color: "white",padding:'12px'}}>
          Logout
        </button>
      </Link>
    </div>
  );
};

export default Logout;
