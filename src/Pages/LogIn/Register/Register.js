import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import LogInGoogle from "../LogInGoogle/LogInGoogle";

const Register = () => {
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  if (user) {
    navigate("/home");
  }
  const handleRegister = (event) => {
    event.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="container w-50 mx-auto shadow rounded bg-body p-4 mt-4 h-400">
      <h2 className="text-center text-primary fw-bold my-4">Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className="p-2 mb-4"
            type="text"
            ref={firstNameRef}
            placeholder=" Your First Name"
            required
          />
          <Form.Control
            className="p-2 mb-4"
            ref={lastNameRef}
            type="text"
            placeholder="Your Last Name"
          />
          <Form.Control
            className="p-2 mb-4"
            type="email"
            ref={emailRef}
            placeholder="Your Email Address"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Your Password"
          />
        </Form.Group>
        <Form.Text className="text-muted text-center">
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary fw-bolder pe-auto text-decoration-none"
            >
              Please Login
            </Link>
          </p>
        </Form.Text>
        <Button
          className="mx-auto w-50 d-block mb-2 px-4 py-2 text-uppercase"
          variant="primary"
          type="submit"
        >
          Register
        </Button>
      </Form>
      <LogInGoogle></LogInGoogle>
    </div>
  );
};

export default Register;
