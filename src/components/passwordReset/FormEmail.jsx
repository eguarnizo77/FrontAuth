import React, { useState, useContext } from "react";

import { useForm } from "react-hook-form";

import { Notify } from "notiflix/build/notiflix-notify-aio";

import Auth from "../../services/Auth";

import AuthContext from "../../context/Auth";

import LoadingButton from "../utils/loadingButton";

const FormEmail = () => {
  const { editPasswordReset } = useContext(AuthContext);

  const [isLoadingButton, setIsLoadingButton] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    setIsLoadingButton(true);

    const data = {
      email: formData.email,
    };

    Auth.getPasswordReset(data).then((res) => {
      if (res.success === true) {        
        editPasswordReset({ email: data.email, code: res.code, form: 2 });
        Notify.success("Verification code sent successfully");
      } else {
        Notify.failure(res.error);
      }
      setIsLoadingButton(false);
    });
  };

  return (
    <div className="container">
      <div className="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
        <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div className="card py-lg-3">
            <div className="card-body text-center">
              <h4 className="mb-0 font-weight-bolder">Reset your password</h4>
              <p className="mb-4">
                Enter your user account's verified email address and we will
                send you a password reset link.
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
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
                    <div className="mt-1 text-start">
                      <span className="toast-validator p-2 bg-white text-danger">
                        {errors.email.message}
                      </span>
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn bg-gradient-dark mt-3 mb-0"
                    disabled={isLoadingButton}
                  >
                    <LoadingButton
                      isLoading={isLoadingButton}
                      textButton={"Send password reset email"}
                    />
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
export default FormEmail;
