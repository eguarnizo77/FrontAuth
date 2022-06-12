import React, {useContext, useState} from "react";

import UserContext from "../../context/User";

const Header = ({userData}) => {
  const { editUser, isEdit, imageProfile } = useContext(UserContext); 

  return (
    <div className="container-fluid">
      <div className="page-header min-height-300 border-radius-xl mt-4 bg-profile-background">
        <span className="mask opacity-6"></span>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 text-center mx-auto">
              <h1 className="text-white mb-2 mt-5">Personal info</h1>
              <p className="text-lead text-white">
                Basic info, like your name and photo
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-body blur shadow-blur mx-4 mt-n6 overflow-hidden">
        <div className="row gx-4">
          <div className="col-auto">
            <div className="avatar avatar-xl position-relative">
              <img
                src={imageProfile.path}
                alt="profile_image"
                className="w-100 border-radius-lg shadow-sm"
              />
            </div>
          </div>
          <div className="col-auto my-auto">
            <div className="h-100">
              <h5 className="mb-1">{userData.username}</h5>
              <p className="mb-0 font-weight-bold text-sm">{userData.bio}</p>
            </div>
          </div>
          <div className="col-lg-2 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-5">
            <div className="nav-wrapper position-relative end-0">
              <ul className="nav nav-pills nav-fill p-1 bg-transparent">
                <li className="nav-item">                
                  <button
                    type="button"
                    className={`btn btn-outline-info ${isEdit ? 'd-none' : 'd-block'}`}                    
                    onClick={() => {
                      isEdit
                        ? editUser(false)
                        : editUser(true);
                    }}
                  >
                    Edit
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
