import React, { useContext } from "react";
import AlertContext from "../../context/AlertContext";
// import PropTypes from "prop-types";
const Alert = () => {
  const { alerts } = useContext(AlertContext);

  return (
    alerts !== null &&
    alerts.length > 0 && (
      <div className='absolute right-4 top-2 flex flex-col'>
        {alerts.map((alert) => (
          <div key={alert.id} className='my-1 py-3 px-3 bg-red-50 text-red-600 font-normal border-red-500 border-l-4 rounded transition-all delay-1000'>
            <small><i className="fas fa-times-circle pr-3" /></small>
            {alert.msg}
          </div>
        ))}
      </div>
    )
  );
};

export default Alert;
