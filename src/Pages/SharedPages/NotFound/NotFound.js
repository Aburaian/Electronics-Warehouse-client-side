import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <h1>404 Not Found</h1>
      <button>
        <Link className="text-decoration-none" to="/">
          GO BACK TO HOME
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
