import React, { useContext } from "react";

import UserContext from "../../context/User";

const Index = ({userData}) => {
const {imageProfile} = useContext(UserContext);

  return (
    <div className="container-fluid my-3 py-3">
      <div className="row mb-5">
        <div className="col-lg-2"></div>
        <div className="col-lg-8 mt-lg-0 mt-4">
          <div className="card card-body mx-4" id="profile">
            <div className="card-header">
              <h5>Profile</h5>
              <p>Some info may be visible to other people</p>
            </div>
            <div className="card-body p-3">
              <div className="row mb-3">
                <div className="col-4">
                  <h6>Photo</h6>
                </div>
                <div className="col-5">
                  <div className="avatar">
                    <img
                      src={imageProfile.path}
                      alt="avatar"
                      className="border-radius-lg shadow"
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-4">
                  <h6>Name</h6>
                </div>
                <div className="col-5">
                  <span className="text-secondary text-sm">{userData.username}</span>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-4">
                  <h6>Bio</h6>
                </div>
                <div className="col-5">
                  <span className="text-secondary text-sm">{userData.bio}</span>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-4">
                  <h6>Phone</h6>
                </div>
                <div className="col-5">
                  <span className="text-secondary text-sm">{userData.phone}</span>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-4">
                  <h6>Email</h6>
                </div>
                <div className="col-5">
                  <span className="text-secondary text-sm">{userData.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};
export default Index;
