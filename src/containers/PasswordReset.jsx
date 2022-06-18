import React, { useContext, useEffect } from "react";

import AuthContext from "../context/Auth";

import NavBar from "../layout/NavBar";
import Header from "../components/passwordReset/Header";
import FormEmail from "../components/passwordReset/FormEmail";
import FormVerification from "../components/passwordReset/FormVerification";
import Footer from "../layout/Footer";

import "../styles/dashboard.css";

const PasswordReset = () => {
  const {passwordReset } = useContext(AuthContext);

  return (
    <>
      <NavBar />
      <div className="main-content mt-0">
        <Header />
        {passwordReset.form === 1 ? <FormEmail /> : ""}
        {passwordReset.form === 2 ? <FormVerification /> : ""}
      </div>
      <Footer />
    </>
  );
};
export default PasswordReset;
