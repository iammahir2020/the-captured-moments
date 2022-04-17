import React from "react";
import "./Banner.css";
import logoDark from "../../../../images/logoDark.png";
import nameLogo from "../../../../images/mahir1.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

const Banner = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  return (
    <div className="banner">
      <h6>Welcome</h6>
      {user ? (
        <>
          {/* <h4 className="text-danger">{user?.email}</h4> */}
          <h4 className="text-danger">{user?.displayName}</h4>
        </>
      ) : (
        <h4 className="text-danger">Guest</h4>
      )}
      <h6>to</h6>

      <img className="brand-logo" src={logoDark} alt="" />
      <h6>By</h6>
      <img className="name-logo" src={nameLogo} alt="" />
      <br />
      <br />
      <button className="gallery-btn">View Gallery</button>
    </div>
  );
};

export default Banner;
