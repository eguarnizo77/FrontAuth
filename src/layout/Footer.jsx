import React from "react";

import { BsInstagram, BsGithub, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-4 mt-2">
            <a href="" target="_blank" className="text-secondary me-xl-4 me-4">
              <BsInstagram />
            </a>
            <a href="" target="_blank" className="text-secondary me-xl-4 me-4">
              <BsGithub />
            </a>
            <a href="" target="_blank" className="text-secondary me-xl-4 me-4">
              <BsTwitter />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-8 mx-auto text-center mt-1">
            <p className="mb-0 text-secondary">
              Copyright © 2020 All rights reserved | Eduardo Guarnizo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
