import React, { useState, useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import UserContext from "../context/User";
import AuthContext from "../context/Auth";

import User from "../services/User";
import ImageProfileService from "../services/ImageProfile";

import NavBar from "../layout/NavBar";
import Header from "../components/profile/Header";
import Index from "../components/profile/Index";
import EditInfo from "../components/profile/EditInfo";
import Footer from "../layout/Footer";

import "../styles/dashboard.css";

const Profile = () => {
  const { isLogged, user } = useContext(AuthContext);
  const { isEdit, editImgProfile, editUserData, userData } = useContext(UserContext);
  
  const navigate = useNavigate();

  useEffect(() => {        
    if (isLogged) {
      User.getUserByEmail(user).then((res) => {
        if (res) {
          editUserData(res);

          ImageProfileService.getImagesById(user, res.image).then((resImg) => {
            if (resImg) {
              editImgProfile({id: resImg.id, path: resImg.path });
            }
          });
        }
      });
    } else {      
      navigate("/login");
    }
  }, [isLogged]);

  return (
    <>
      <NavBar userData={userData} />
      <div className="main-content mt-0">
        <Header userData={userData} />
        {isEdit ? <EditInfo userData={userData} /> : <Index userData={userData} />}              
      </div>
      <Footer />
    </>
  );
};
export default Profile;
