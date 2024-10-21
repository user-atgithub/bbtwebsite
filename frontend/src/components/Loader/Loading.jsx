import React from "react";
import loadingGif from "../../Assets/images/loading.gif";
const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <img src={loadingGif} alt="Loading..." />
    </div>
  );
};

export default Loading;