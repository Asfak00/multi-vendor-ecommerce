import React from "react";

import gif from "../../../../Assets/processing.gif";

const ShopInbox = () => {
  return (
    <div className="w-full flex items-center flex-col justify-center h-full">
      <img src={gif} alt="image" className="w-[150px] h-[150px]" />
      <h1 className="text-4xl font-[700]">Comming Soon</h1>
    </div>
  );
};

export default ShopInbox;
