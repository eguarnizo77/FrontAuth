import React, { useContext, useEffect, useState } from "react";

import UserContext from "../../context/User";
import AuthContext from "../../context/Auth";

import ImageProfile from "../../services/ImageProfile";
import User from "../../services/User";

import LoadingButton from "../utils/loadingButton";

import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import { Notify } from "notiflix";
import { Block } from 'notiflix/build/notiflix-block-aio';

const PhotoSelector = ({ userData }) => {
  const { openModal, editImgProfile, imageProfile } = useContext(UserContext);
  const { user } = useContext(AuthContext);

  const [imagesData, setImagesData] = useState([]);
  const [imageProfileSelect, setImageProfileSelect] = useState(imageProfile);  
  const [isLoadingButton, setIsLoadingButton] = useState(false);

  useEffect(() => {    
    setIsLoadingButton(true);
    Block.pulse(".js-element", "Please wait...");   

    ImageProfile.getAllImages(user).then((resImg) => {
      setTimeout(() => {
        if (resImg) {
          setImagesData(resImg);
        }   
        Block.remove('.js-element');  
        setIsLoadingButton(false);
      }, 1000);
               
    });   
  }, []);

  const HandleClickSelect = (id, path) => {
    setImageProfileSelect({ id: id, path: path });
  };

  const HandleClickSave = () => {
    setIsLoadingButton(true);

    const _userData = userData;
    _userData.image = imageProfileSelect.id;

    User.UpdateUser(_userData, user).then((res) => {
      if (res.success === true) {
        editImgProfile(imageProfileSelect);
        Notify.success("Updated profile picture");
      }
    });

    setIsLoadingButton(false);    
  };

  return (
    <>
      <div className="card-header">
        <h5>Images Profile</h5>
      </div>        
      <DialogContent>
        <div className="row js-element">

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
          <LoadingButton isLoading={isLoadingButton} textButton={"Save"} />
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
