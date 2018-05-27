import React from "react";

const outline = props => {

    // a custome button whose bg-color is transparent but have a border


    let style = {
    color: props.color ? props.color : "black" //user choice or else black(default)
  };

  return (
    <div style={style} className="  text-white text-center p-1 outline-btn">
      <p className="mt-2 lead h4">{props.text}</p>
    </div>
  );
};

export default outline;
