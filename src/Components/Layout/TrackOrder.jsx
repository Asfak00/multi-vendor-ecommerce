import React from "react";

import processingGif from "../../Assets/processing.gif";

const TrackOrder = () => {
  return (
    <div className="h-[50vh] flex flex-col items-center justify-center">
      <img
        src={processingGif}
        alt="processing/gif"
        className="w-[150px] h-[150px]"
      />
      <h1 className="font-[700] text-[25px] text-[#333]">
        Your order is processing in shop
      </h1>
    </div>
  );
};

export default TrackOrder;
