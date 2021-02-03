import React from "react";

const UtilityTemplate = ({children}) => {
    
  return (
    <div className="flex">
      <div className="w-5/12 bg-gray-800"></div>
      <div className="w-7/12 pl-20">
        <div className={`flex items-center h-screen`}>
          <div className="container w-4/12">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default UtilityTemplate;
