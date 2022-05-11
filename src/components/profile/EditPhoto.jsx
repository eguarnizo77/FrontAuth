import React from "react";

import imgProfile from "../../assets/img/hacker.png";

const EditPhoto = () => {
  return (
    <div className="card h-100 mx-4">
      <div className="card-body">
        <h5>Changue Photo</h5>
        <div className="row">
          <div className="col-12 text-center">
            <img
              className="max-width-200 border-radius-lg shadow-lg mt-3"
              src={imgProfile}
              alt="avatar_image"
            />
          </div>
          <div className="col-12 mt-4">
            <div className="d-flex">
              <button              
                className="btn bg-gradient-info btn-sm mb-0 me-2"
                type="button"
                name="button"
              >
                Edit
              </button>
              <button
                className="btn btn-outline-dark btn-sm mb-0"
                type="button"
                name="button"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditPhoto;
