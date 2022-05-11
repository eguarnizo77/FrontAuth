import React from "react";

import Photo from "../../components/profile/EditPhoto";

const EditInfo = () => {
  return (
    <div className="container-fluid my-3 py-3">
      <div className="row mb-5">
        <div className="col-lg-4">
          <Photo />
        </div>
        <div className="col-lg-8 mt-lg-0 mt-4">
          <div className="card card-body mx-4" id="profile">
            <div className="card-header">
              <h5>Change Info</h5>
              <p>Changes will be reflected to every services</p>
            </div>
            <div className="card-body pt-0">
              <div className="row">
                <div className="col-lg-6">
                  <label className="form-label">Name</label>
                  <div className="input-group">
                    <input
                      name="Name"
                      className="form-control"
                      type="text"
                      placeholder="Enter your name..."
                      required="required"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <label className="form-label">Password</label>
                  <div className="input-group">
                    <input
                      name="Password"
                      className="form-control"
                      type="Password"
                      placeholder="Enter your new password..."
                      required="required"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <label className="form-label">Bio</label>
                <div className="input-group">
                  <textarea 
                    name="Bio"
                    className="form-control"                    
                    placeholder="Enter your bio..."                    
                  ></textarea>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-lg-6">
                  <label className="form-label">Phone</label>
                  <div className="input-group">
                    <input
                      name="Phone"
                      className="form-control"
                      type="text"
                      placeholder="Enter your name..."
                      required="required"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <label className="form-label">Email</label>
                  <div className="input-group">
                    <input
                      name="Email"
                      className="form-control"
                      type="email"
                      placeholder="Enter your email..."
                      required="required"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-12 text-end">
                    <button className="btn bg-gradient-info my-4 mb-2">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditInfo;
