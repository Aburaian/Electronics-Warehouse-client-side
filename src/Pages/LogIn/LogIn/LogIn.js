import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogInGoogle from "../LogInGoogle/LogInGoogle";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }
  if (loading || sending) {
    return;
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  const handleLogIn = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };
  return (
    <div className="container w-50 mx-auto shadow rounded bg-body p-4 mt-4">
      <h2 className="text-center text-primary fw-bold my-4">Please Login</h2>
      <Form onSubmit={handleLogIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Text className="text-muted text-center">
          <p>
            Create New Account.{" "}
            <Link
              to="/register"
              className="text-primary fw-bolder pe-auto text-decoration-none"
            >
              Please Register
            </Link>
          </p>
          <p>
            Forget Password?{" "}
            <button
              className="btn btn-link fw-bolder text-primary pe-auto text-decoration-none"
              onClick={resetPassword}
            >
              Reset Password
            </button>{" "}
          </p>
        </Form.Text>
        <Button
          className="mx-auto w-50 d-block mb-2 px-4 py-2 text-uppercase"
          variant="primary"
          type="submit"
        >
          Log in
        </Button>
      </Form>
      {errorElement}
      <LogInGoogle></LogInGoogle>
      <ToastContainer />
    </div>
  );
};

export default Login;
