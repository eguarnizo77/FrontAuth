import React from "react";

import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";

import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Report } from "notiflix/build/notiflix-report-aio";

import User from "../../services/User";

const Form = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {    
    const data = {
      email: formData.email,
      password: formData.password,
      username: formData.username,
      bio: "",
      phone: "",
      state: 1,
    };

    User.createUser(data).then((res) => {      
      if (res.success) {
        Report.success(
          "User created successfully",
          "<b> Welcome <b/> to the family",
          "Okay"
        );
        navigate("/login");
      } else {
        Notify.failure(res.error);
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="form-control"
            {...register("username", {
              required: {
                value: true,
                message: "🤵🏻| Username is required",
              },
            })}
          />
          {errors.username && (
            <div className="mt-1">
              <span className="toast-validator p-2 bg-white text-danger">
                {errors.username.message}
              </span>
            </div>
          )}
        </div>
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
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-.\/:;<=>?\\@[\]^_`{|}~]).{6,64}$/,
                message: "🔐| Min 1 lowercase character | Max 1 lowercase character | Min 1 number | Min 1 special characters",
              },
              minLength: {
                value: 8,
                message: "🔐| Password must be at least 8 characters",
              },
              maxLength: {
                value: 16,
                message: "🔐| Password must be at least 16 characters",
              }              
            })}
          />
          {errors.password && (
            <div className="mt-2">
              <span className="toast-validator p-2 bg-white text-danger">
                {errors.password.message}
              </span>
            </div>
          )}
        </div>
        <div className="form-check form-check-info text-start">
          <input
            name="conditions"
            type="checkbox"
            className="form-check-input"
            {...register("conditions", {
              required: {
                value: true,
                message: "✔️​| You must accept the conditions",
              },
            })}
          />
          <label className="form-check-label">
            I agree the
            <a href="" className="text-dark font-weight-bolder">
            &nbsp; Terms and Conditions
            </a>
          </label>
          {errors.conditions && (
            <div className="mt-1">
              <span className="toast-validator p-2 bg-white text-danger">
                {errors.conditions.message}
              </span>
            </div>
          )}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn bg-gradient-dark w-100 my-4 mb-2"
          >
            Sign up
          </button>
        </div>
      </form>
      <p className="text-sm mt-3 mb-0">
        Already have an account?
        <Link to="/login" className="text-dark font-weight-bolder">
        &nbsp; Login
        </Link>
      </p>
    </>
  );
};
export default Form;
