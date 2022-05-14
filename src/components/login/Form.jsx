import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Report } from "notiflix/build/notiflix-report-aio";

import Auth from "../../services/Authentication";

const Form = () => {
  const form = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    Auth.getToken(data)
    .then((res) => {
      if (res.error) {
        Notify.failure(res.message);
      } else {
        localStorage.setItem("token", res.data.token);
        Report.success(
          "Athentication Success",
          '"Do not try to become a person of success but try to become a person of value." <br/><br/>- Albert Einstein',
          "Okay"
        );
        navigate("/profile");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      <form action="/" ref={form} className="text-start">
        <div className="mb-3">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <input
            name="password"
            type="password"
            placeholder="password"
            className="form-control"
          ></input>
        </div>
      </form>
      <div className="text-center">
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn bg-gradient-info w-100 my-4 mb-2"
        >
          Log in
        </button>
      </div>
      <div className="mb-2 position-relative text-center">
        <p className="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3">
          or
        </p>
      </div>
      <div className="text-center">
        <Link to="/signup" className="btn bg-gradient-dark w-100 mt-2 mb-4">
          Sign up
        </Link>
      </div>
    </>
  );
};
export default Form;
