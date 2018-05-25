import React from "react";

const fill = props => {
  return (
    <div className="fil-btn bg-white text-dark text-center p-1 fill-btn">
      <p className="mt-2">{props.text}</p>
    </div>
  );
};

export default fill;
