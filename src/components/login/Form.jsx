import React, { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form role="form" className="text-start">
      <div className="mb-3">
        <input
          name="email"
          type="email"
          placeholder="Email"
          aria-label="email"
          className="form-control"
          onChange={({ target }) => setEmail(target.value)}
        ></input>
      </div>
      <div className="mb-3">
        <input
          name="password"
          type="password"
          placeholder="password"
          aria-label="password"
          className="form-control"
          onChange={({ target }) => setPassword(target.value)}
        ></input>
      </div>
      <div className="text-center">
        <button type="button" className="btn bg-gradient-info w-100 my-4 mb-2">
        Log in 
        </button>
      </div>
      <div className="mb-2 position-relative text-center">
        <p className="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3">
          or
        </p>
      </div>
      <div className="text-center">
        <Link to="/signup" className="btn bg-gradient-dark w-100 mt-2 mb-4">Sign up</Link>
      </div>
    </form>
  );
};
export default Form;
