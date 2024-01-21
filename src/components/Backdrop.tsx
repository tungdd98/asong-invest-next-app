import React, { FC } from "react";

const Backdrop: FC = () => {
  return (
    <div
      className="z-10 hidden top-0 bottom-0 left-0 right-0 bg-black/50"
      id="backdrop"
    ></div>
  );
};

export default Backdrop;
