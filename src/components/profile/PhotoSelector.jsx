import React, { useContext, useEffect, useState } from "react";

import UserContext from "../../context/User";
import AuthContext from "../../context/Auth";

import ImageProfile from "../../services/ImageProfile";
import User from "../../services/User";

import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Notify } from "notiflix";

const PhotoSelector = ({userData}) => {
  const { openModal, editImgProfile, imageProfile } = useContext(UserContext);
  const { user } = useContext(AuthContext);

  const [imagesData, setImagesData] = useState([]);
  const [imageProfileSelect, setImageProfileSelect] = useState(imageProfile);

  useEffect(() => {
    ImageProfile.getAllImages(user).then((resImg) => {
      if (resImg) {
        setImagesData(resImg);
      }
    });
  }, []);

  const HandleClickSelect = (id, path) => {
    setImageProfileSelect({ id: id, path: path });
  };

  const HandleClickSave = () => {
    const _userData = userData;
    _userData.image = imageProfileSelect.id;

    User.UpdateUser(_userData, user).then((res) => {
      if (res.success === true) {
        editImgProfile(imageProfileSelect);
        Notify.success("Updated profile picture");
      }
    });
  };

  return (
    <>
      <div className="card-header">
        <h5>Images Profile</h5>
      </div>

      <DialogContent>
        <div className="row">
          {imagesData.map((item) => (
            <div
              key={item.id}
              className={`col-lg-4 btn ${
                imageProfileSelect.id == item.id ? "alert-success" : ""
              }`}
              onClick={() => HandleClickSelect(item.id, item.path)}
            >
              <div className="avatar avatar-xl position-relative">
                <img src={item.path} />
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
      <DialogActions>
        <button
          className="btn bg-gradient-info btn-sm mb-0 me-2"
          type="button"
          name="button"
          onClick={HandleClickSave}
        >
          Save
        </button>
        <button
          className="btn btn-outline-dark btn-sm mb-0"
          type="button"
          name="button"
          onClick={() => openModal(false)}
        >
          Exit
        </button>
      </DialogActions>
    </>
  );
};
export default PhotoSelector;
