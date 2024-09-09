import React from "react";
import loadingGif from "../../Assets/images/loading.gif"; // Update the path to your actual GIF location

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <img src={loadingGif} alt="Loading..." />
    </div>
  );
};

export default Loading;
/*import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <HashLoader color="#0067FF" />
    </div>
  );
};

export default Loading;*/
