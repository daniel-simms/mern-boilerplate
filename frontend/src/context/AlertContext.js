import React, { useState } from "react";
import uuid from "uuid";

const AlertContext = React.createContext();

export const AlertContextProvider = ({ children }) => {
  //
  // State
  //
  const [alerts, setAlerts] = useState([]);

  const setAlert = (msg, alertType, timeout = 3000) => {
    const id = uuid.v4();
    setAlerts((prev) => [...prev, { msg, alertType, id }]);
    setTimeout(
      () => setAlerts((prev) => prev.filter((alert) => alert.id !== id)),
      timeout
    );
  };

  return (
    <AlertContext.Provider
      value={{
        alerts,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
