import React, { useContext } from "react";

import UserContext from "../../context/User";

import Modal from "../../layout/Modal";
import PhotoSelector from "./PhotoSelector";

const EditPhoto = ({userData}) => {
  const { isOpenModal, openModal, imageProfile } = useContext(UserContext);  

  return (
    <div className="card h-100 mx-4">
      <div className="card-body">
        <h5>Changue Photo</h5>
        <div className="row">
          <div className="col-12 text-center">
            <img
              className="max-width-200 border-radius-lg shadow-lg mt-3"
              src={imageProfile.path}
              alt="avatar_image"
            />
          </div>
          <div className="col-12 mt-4">
            <div className="text-center">
              <button
                className="btn bg-gradient-info btn-sm mb-0 me-2"
                type="button"
                name="button"
                onClick={() =>
                  isOpenModal ? openModal(false) : openModal(true)
                }
              >
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpenModal ? (
        <Modal>
          <PhotoSelector userData={userData} />
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};
export default EditPhoto;
