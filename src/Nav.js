import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {

  const navigate = useNavigate()

  const [show, handleshow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleshow(true);
    } else {
      handleshow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll" , transitionNavBar);
    return () => window.removeEventListener('scroll' , transitionNavBar)
  },[]);
  return (
    //show $$ nav__black shows that only add navblack class if show is true
    <div className={`nav ${show && `nav__black`}`}>
      <div className="nav_contents">
        <img
        onClick={() => navigate("/")}
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav_avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
