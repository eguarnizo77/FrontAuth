import React, { useState, useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import UserContext from "../context/User";
import AuthContext from "../context/Auth";

import User from "../services/User";
import ImageProfileService from "../services/ImageProfile";

import NavBar from "../layout/NavBar";
import Header from "../components/passwordReset/Header";
import FormEmail from "../components/passwordReset/FormEmail";
import EditInfo from "../components/profile/EditInfo";
import Footer from "../layout/Footer";

import "../styles/dashboard.css";

const PasswordReset = () => {
  const { isLogged, user } = useContext(AuthContext);
  const { isEdit, editImgProfile, editUserData, userData } =
    useContext(UserContext);

  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="main-content mt-0">
        <Header />
        <FormEmail/>
      </div>
      <Footer />
    </>
  );
};
export default PasswordReset;
