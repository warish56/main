import React from "react";
import buttoncss from '../../css/buttons.css'
const fill = props => {


    // a custome button whose bg-color is filled

    let style={
        backgroundColor:props.bgcolor, //user choice
        color:props.textcolor //user choice
    }

  return (
    <div style={style} className=" text-center p-1 fill-btn">
      <p className="mt-2">{props.text}</p>
    </div>
  );
};

export default fill;
