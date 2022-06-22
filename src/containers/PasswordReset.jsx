import React, { useContext, useEffect } from "react";

import AuthContext from "../context/Auth";

import NavBar from "../layout/NavBar";
import Header from "../components/passwordReset/Header";
import FormEmail from "../components/passwordReset/FormEmail";
import FormVerification from "../components/passwordReset/FormVerification";
import FormNewPassword from "../components/passwordReset/FormNewPassword";
import Footer from "../layout/Footer";

import "../styles/dashboard.css";

const PasswordReset = () => {
  const { passwordReset } = useContext(AuthContext);

  return (
    <>
      <NavBar />
      <div className="main-content mt-0">
        <Header />
        {passwordReset.form === 1 ? <FormEmail /> : ""}
        {passwordReset.form === 2 ? <FormVerification /> : ""}
        {passwordReset.form === 3 ? <FormNewPassword /> : ""}
      </div>
      <Footer />
    </>
  );
};
export default PasswordReset;
