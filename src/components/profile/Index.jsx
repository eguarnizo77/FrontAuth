import React from "react";

import imgProfile from "../../assets/img/hacker.png";

const Index = () => {
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
                  <div class="avatar">
                    <img
                      src={imgProfile}
                      alt="avatar"
                      class="border-radius-lg shadow"
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-4">
                  <h6>Bio</h6>
                </div>
                <div className="col-5">
                  <span class="text-secondary text-sm">Edaurdo Guarnizo</span>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-4">
                  <h6>Phone</h6>
                </div>
                <div className="col-5">
                  <span class="text-secondary text-sm">Edaurdo Guarnizo</span>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-4">
                  <h6>Email</h6>
                </div>
                <div className="col-5">
                  <span class="text-secondary text-sm">Edaurdo Guarnizo</span>
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
