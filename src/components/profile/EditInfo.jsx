import React, { useState, useContext } from "react";

import { sha256 } from "js-sha256";

import User from "../../services/User";

import { useForm } from "react-hook-form";

import { Notify } from "notiflix";

import Photo from "../../components/profile/EditPhoto";
import LoadingButton from "../utils/loadingButton";

import UserContext from "../../context/User";
import AuthContext from "../../context/Auth";

const EditInfo = ({ userData }) => {
  const { editUser, editUserData } = useContext(UserContext);
  const { user } = useContext(AuthContext);
  const [isLoadingSave, setIsLoadingSave] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: userData.username,
      bio: userData.bio,
      phone: userData.phone,
    },
  });

  const onSubmit = (formData) => {
    setIsLoadingSave(true);
    const data = {
      id: userData.id,
      email: userData.email,
      password:
        formData.password != "" &&
        sha256(formData.password) != userData.password
          ? formData.password
          : userData.password,
      username: formData.username,
      bio: formData.bio,
      phone: formData.phone,
      state: 1,
    };
    
    User.UpdateUser(data, user).then((res) => {
      if (res.success) {
        console.log("actualizo")
        editUserData(data);
        Notify.success("Updated user");
        setIsLoadingSave(false);
      }
    });
  };

  return (
    <div className="container-fluid my-3 py-3">
      <div className="row mb-5">
        <div className="col-lg-4">
          <Photo userData={userData} />
        </div>
        <div className="col-lg-8 mt-lg-0 mt-4">
          <div className="card card-body mx-4" id="profile">
            <div className="card-header">
              <h5>Change Info</h5>
              <p>Changes will be reflected to every services</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="text-start">
              <div className="card-body pt-0">
                <div className="row">
                  <div className="col-lg-6">
                    <label className="form-label">Name</label>
                    <div className="input-group">
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
                    </div>
                    {errors.username && (
                      <div className="mt-1">
                        <span className="toast-validator p-2 bg-white text-danger">
                          {errors.username.message}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label">Password</label>
                    <div className="input-group">
                      <input
                        name="password"
                        type="password"
                        placeholder="*********"
                        className="form-control"
                        {...register("password", {
                          pattern: {
                            value:
                              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-.\/:;<=>?\\@[\]^_`{|}~]).{6,64}$/,
                            message:
                              "🔐| Min 1 lowercase character | Max 1 lowercase character | Min 1 number | Min 1 special characters",
                          },
                          minLength: {
                            value: 8,
                            message:
                              "🔐| Password must be at least 8 characters",
                          },
                          maxLength: {
                            value: 16,
                            message:
                              "🔐| Password must be at least 16 characters",
                          },
                        })}
                      />
                    </div>
                    {errors.password && (
                      <div className="mt-2">
                        <span className="toast-validator p-2 bg-white text-danger">
                          {errors.password.message}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="row mt-2">
                  <label className="form-label">Bio</label>
                  <div className="input-group">
                    <textarea
                      name="bio"
                      className="form-control"
                      placeholder="Enter your bio..."
                      {...register("bio", {
                        required: {
                          value: true,
                          message: "💭| Bio is required",
                        },
                      })}
                    />
                  </div>
                  {errors.bio && (
                    <div className="mt-2">
                      <span className="toast-validator p-2 bg-white text-danger">
                        {errors.bio.message}
                      </span>
                    </div>
                  )}
                </div>
                <div className="row mt-2">
                  <div className="col-lg-6">
                    <label className="form-label">Phone</label>
                    <div className="input-group">
                      <input
                        name="phone"
                        className="form-control"
                        type="number"
                        placeholder="Enter your name..."
                        {...register("phone", {
                          minLength: {
                            value: 10,
                            message:
                              "📱​| Phone must be at least 10 characters",
                          },
                          maxLength: {
                            value: 11,
                            message:
                              "📱​| Phone must be at least 11 characters",
                          },
                        })}
                      />
                    </div>
                    {errors.phone && (
                      <div className="mt-2">
                        <span className="toast-validator p-2 bg-white text-danger">
                          {errors.phone.message}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-12 text-end">
                    <button
                      type="submit"
                      className="btn bg-gradient-info my-4 mb-2 me-4"                      
                      disabled={isLoadingSave}
                    >
                      <LoadingButton isLoading={isLoadingSave} textButton={"Save"} />
                    </button>
                    <button
                      className="btn btn-outline-dark my-4 mb-2"
                      onClick={() => editUser(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditInfo;
