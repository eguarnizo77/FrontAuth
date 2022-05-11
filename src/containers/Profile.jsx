import React from "react";

import NavBar from "../layout/NavBar";
import Header from "../components/profile/Header";
import Index from "../components/profile/Index";
import EditInfo from "../components/profile/EditInfo";
import Footer from "../layout/Footer";

import '../styles/dashboard.css';

const Profile = () => {
  return (
    <>
      <NavBar />
      <div className="main-content mt-0">
        <Header /> 
        <EditInfo />       
      </div>
      <Footer />
    </>
  );
};
export default Profile;
