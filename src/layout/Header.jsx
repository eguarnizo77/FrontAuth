import React from "react";

const Header = () => {
  return (
    <div className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg main-layaout bg-main-background">
      <span className="mask bg-gradient-dark opacity-6"></span>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 text-center mx-auto">
            <h1 className="text-white mb-2 mt-5">Welcome!</h1>
            <p className="text-lead text-white">
              Use these awesome forms to login or create new account in your
              project for free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
