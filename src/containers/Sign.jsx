import React from "react";

import Form from "../components/Sign/Form";

const Sign = () => {

  return (
    <div className="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
      <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
        <div className="card z-index-0">
          <div className="card-header text-center pt-4">
            <h5>Sign in</h5>
          </div>
          <div className="card-body">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sign;
