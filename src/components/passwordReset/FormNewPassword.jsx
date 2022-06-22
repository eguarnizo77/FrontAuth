import React, { useContext } from "react";

import { useForm } from "react-hook-form";

import { Notify } from "notiflix/build/notiflix-notify-aio";

import Auth from "../../services/Auth";

import { useNavigate } from "react-router-dom";

import AuthContext from "../../context/Auth";

const FormNewPassword = () => {
  const { passwordReset } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    const data = {
      email: passwordReset.email,
      password: formData.passwordTwo,
    };
    if (formData.passwordOne != formData.passwordTwo) {
      return Notify.warning("Passwords do not match");
    }
    Auth.updatePasswordUser(data).then((res) => {
      if (res.success) {
        Notify.success("Password updated successfully");
        navigate("/login");
      } else {
        Notify.failure(res.error);
      }
    });
  };

  return (
    <div className="container">
      <div className="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
        <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div className="card py-lg-3">
            <div className="card-body text-center">
              <h4 className="mb-0 font-weight-bolder">Reset your password</h4>
              <p className="mb-4">New Password</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <input
                    name="passwordOne"
                    type="password"
                    placeholder="New password"
                    className="form-control"
                    {...register("passwordOne", {
                      required: {
                        value: true,
                        message: "🔐​| Password is required",
                      },
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-.\/:;<=>?\\@[\]^_`{|}~]).{6,64}$/,
                        message:
                          "🔐| Min 1 lowercase character | Max 1 lowercase character | Min 1 number | Min 1 special characters",
                      },
                      minLength: {
                        value: 8,
                        message: "🔐| Password must be at least 8 characters",
                      },
                      maxLength: {
                        value: 16,
                        message: "🔐| Password must be at least 16 characters",
                      },
                    })}
                  />
                  {errors.passwordOne && (
                    <div className="mt-1 text-start">
                      <span className="toast-validator p-2 bg-white text-danger">
                        {errors.passwordOne.message}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    name="passwordTwo"
                    type="password"
                    placeholder="Repeat password"
                    className="form-control"
                    {...register("passwordTwo", {
                      required: {
                        value: true,
                        message: "🔐​| Password is required",
                      },
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-.\/:;<=>?\\@[\]^_`{|}~]).{6,64}$/,
                        message:
                          "🔐| Min 1 lowercase character | Max 1 lowercase character | Min 1 number | Min 1 special characters",
                      },
                      minLength: {
                        value: 8,
                        message: "🔐| Password must be at least 8 characters",
                      },
                      maxLength: {
                        value: 16,
                        message: "🔐| Password must be at least 16 characters",
                      },
                    })}
                  />
                  {errors.passwordTwo && (
                    <div className="mt-1 text-start">
                      <span className="toast-validator p-2 bg-white text-danger">
                        {errors.passwordTwo.message}
                      </span>
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn bg-gradient-dark mt-3 mb-0"
                  >
                    Send password reset email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormNewPassword;
