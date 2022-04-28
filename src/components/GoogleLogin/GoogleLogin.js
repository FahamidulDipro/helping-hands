import React from "react";
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate("/registerAsVolunteer");
  }
  const googleLogin = () => {
    signInWithGoogle();
  };
  return (
    <div className=" d-flex justify-content-center flex-column">
      <h2>Login With</h2>
      <Button
        onClick={googleLogin}
        className="w-100 p-2 mt-5 rounded-pill"
        variant="outline-dark"
      >
        <img
          src="../google.png"
          alt="googleLogo"
          style={{ width: "50px", margin: "0 30px 0 10px" }}
        ></img>{" "}
        <span className="mx-3" style={{ fontSize: "18px" }}>
          Continue with Google
        </span>
      </Button>
    </div>
  );
};

export default GoogleLogin;
