import React, { useState } from "react";
import { Link } from "react-router-dom";

const Formm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form role="form">
      <div className="mb-3">
        <input
          name="name"
          type="text"
          placeholder="Name"
          aria-label="Name"
          className="form-control"
          onChange={({ target }) => setName(target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          name="email"
          type="email"
          placeholder="Email"
          aria-label="email"
          className="form-control"
          onChange={({ target }) => setEmail(target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          name="password"
          type="password"
          placeholder="password"
          aria-label="password"
          className="form-control"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <div className="form-check form-check-info text-start">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label">
          I agree the
          <a href="" className="text-dark font-weight-bolder">
            Terms and Conditions
          </a>
        </label>
      </div>
      <div className="text-center">
        <button type="button" className="btn bg-gradient-dark w-100 my-4 mb-2">
          Sign up
        </button>
      </div>
      <p className="text-sm mt-3 mb-0">
        Already have an account?
        <Link to="/login" className="text-dark font-weight-bolder">
          Login
        </Link>
      </p>
    </form>
  );
};
export default Formm;
