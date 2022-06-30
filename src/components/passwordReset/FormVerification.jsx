import React, { useContext } from "react";

import { useForm } from "react-hook-form";

import { Notify } from "notiflix/build/notiflix-notify-aio";

import AuthContext from "../../context/Auth";

const FormVerification = () => {
  const { editPasswordReset, passwordReset } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleKeyup = (e, inputFocus) => {   
    if (e.keyCode === 8 || e.target.value === "") return;    
    e.target.value = e.target.value.slice(0, 1);
    if (inputFocus) document.getElementsByName(inputFocus)[0].focus();
  };

  const onSubmit = (formData) => {
    const code =
      formData.codeOne +
      formData.codeTwo +
      formData.codeThree +
      formData.codeFour;

    if (code == passwordReset.code) {
      Notify.success("Code is correct");
      editPasswordReset((prevState) => {
        return { ...prevState, form: 3 };
      });
    } else {
      Notify.warning("Code is incorrect");
    }
  };

  return (
    <div className="container">
      <div className="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
        <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div className="card py-lg-3">
            <div className="card-body text-center">
              <h3 className="mb-0 font-weight-bolder">VERIFICATION</h3>
              <p className="mb-4"></p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row gx-2 gx-sm-3">
                  <div className="col">
                    <div className="form-group">
                      <input
                        name="codeOne"
                        type="number"
                        className="form-control form-control-lg"
                        autoComplete="off"                        
                        onKeyUp={(e) => handleKeyup(e, "codeTwo")}
                        {...register("codeOne", {
                          required: {
                            value: true,
                          },
                          pattern: {
                            value: /^[0-9]+/i,
                          },
                        })}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <input
                        name="codeTwo"
                        type="number"
                        className="form-control form-control-lg"
                        autoComplete="off"                        
                        onKeyUp={(e) => handleKeyup(e, "codeThree")}
                        {...register("codeTwo", {
                          required: {
                            value: true,
                          },
                          pattern: {
                            value: /^[0-9]+/i,
                          },
                        })}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <input
                        name="codeThree"
                        type="number"
                        className="form-control form-control-lg"
                        autoComplete="off"                        
                        onKeyUp={(e) => handleKeyup(e, "codeFour")}
                        {...register("codeThree", {
                          required: {
                            value: true,
                          },
                          pattern: {
                            value: /^[0-9]+/i,
                          },
                        })}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <input
                        name="codeFour"
                        type="number"
                        className="form-control form-control-lg"
                        autoComplete="off"
                        onKeyUp={(e) => handleKeyup(e, "")}
                        {...register("codeFour", {
                          required: {
                            value: true,
                          },
                          pattern: {
                            value: /^[0-9]+/i,
                          },
                        })}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn bg-gradient-dark mt-3 mb-0"
                  >
                    Send code
                  </button>
                  <br />
                  <br />
                  <span className="text-muted text-sm">
                    Haven't received it?
                    <a> Resend a new code</a>.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormVerification;
