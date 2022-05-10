import React from "react";

const Toast = ({icon, message}) => {    
  return (
    <div className="card">
        <div className="card-body">
            {icon} <span className="text-red">{message}</span>
        </div>
    </div>
  )
}
export default Toast;
