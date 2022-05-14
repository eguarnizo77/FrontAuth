import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Report } from "notiflix/build/notiflix-report-aio";

import User from "../../services/User";

const Form = () => {
  const form = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();    
    const formData = new FormData(form.current);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      username: formData.get("username"),
      bio: "",
      phone: "",
      state: 1,
    };

    User.create(data)
      .then((res) => {  
        console.log(res);      
        if (res.error) {
          Notify.failure(res.message);
        } else {
          Report.success(
            "User created successfully",
            "<b> Welcome <b/> to the family",
            "Okay"
          );
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });            
  };

  return (
    <>
      <form action="/" ref={form}>
        <div className="mb-3">
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            name="password"
            type="password"
            placeholder="password"
            className="form-control"
          />
        </div>
        <div className="form-check form-check-info text-start">
          <input
            name="conditions"
            type="checkbox"
            className="form-check-input"
          />
          <label className="form-check-label">
            I agree the
            <a href="" className="text-dark font-weight-bolder">
              Terms and Conditions
            </a>
          </label>
        </div>
      </form>
      <div className="text-center">
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn bg-gradient-dark w-100 my-4 mb-2"
        >
          Sign up
        </button>
      </div>
      <p className="text-sm mt-3 mb-0">
        Already have an account?
        <Link to="/login" className="text-dark font-weight-bolder">
          Login
        </Link>
      </p>
    </>
  );
};
export default Form;
