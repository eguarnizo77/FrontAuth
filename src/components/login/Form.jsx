import React, { useState, useContext } from "react";

import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";

import { Notify } from "notiflix/build/notiflix-notify-aio";

import LoadingButton from "../utils/loadingButton";

import Auth from "../../services/Auth";
import userContext from "../../context/Auth";

const Form = () => {
  const { login } = useContext(userContext);
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    setIsLoadingButton(true);
    const data = {
      email: formData.email,
      password: formData.password,
    };

    Auth.getToken(data).then((res) => {
      if (res.success === true) {
        login({ email: data.email, token: res.token });
        Notify.success("Athentication Success");
        navigate("/profile");
      } else {
        Notify.failure(res.error);
      }
    });
    setIsLoadingButton(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="text-start">
        <div className="mb-3">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="form-control"
            {...register("email", {
              required: {
                value: true,
                message: "✉️| Email is required",
              },
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                message: "✉️| Invalid email address",
              },
            })}
          />
          {errors.email && (
            <div className="mt-1">
              <span className="toast-validator p-2 bg-white text-danger">
                {errors.email.message}
              </span>
            </div>
          )}
        </div>
        <div className="mb-3">
          <input
            name="password"
            type="password"
            placeholder="password"
            className="form-control"
            {...register("password", {
              required: {
                value: true,
                message: "🔐​| Password is required",
              },
            })}
          />
          {errors.password && (
            <div className="mt-1">
              <span className="toast-validator p-2 bg-white text-danger">
                {errors.password.message}
              </span>
            </div>
          )}
        </div>
        <p className="text-sm mt-3 mb-0 text-end">
          <Link to="/passwordReset">Forgot password?</Link>
        </p>
        <div className="text-center">
          <button
            type="submit"
            className="btn bg-gradient-info w-100 my-4 mb-2"
          >
            <LoadingButton isLoading={isLoadingButton} textButton={"Log in"} />
          </button>
        </div>
      </form>
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
