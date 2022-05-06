import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const LogInGoogle = () => {
  const [signInWithGoogle, user, error, loading] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;

  if (loading) {
    return;
  }
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  if (user) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center"></div>
      {errorElement}
      <div className="mb-4">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary w-50 d-block mx-auto my-2"
        >
          <img
            className="w-25"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Google_2011_logo.png/640px-Google_2011_logo.png"
            alt=""
          />
          <span className="px-2">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default LogInGoogle;
