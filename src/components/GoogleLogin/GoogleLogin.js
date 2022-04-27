import React from "react";
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }
  const googleLogin = () => {
    signInWithGoogle();
  };
  return (
    <div className="w-50">
      <Button onClick={googleLogin}>Signin with Google</Button>
    </div>
  );
};

export default GoogleLogin;
