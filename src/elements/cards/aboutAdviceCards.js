import React from "react";

import Heading from "../heading/heading";
import Paragraph from "../paragraph/paragraph";
import Outline from "../buttons/outline";

const aboutAdviceCard = props => {

    // a specific advice card used in about

  let style = {
    backgroundColor: "#075aae",
    borderRadius: "0px",
    color: "white",
    minHeight: "420px"
  };
  return (
    <div style={style} className="card mt-2">
      <div className="card-body p-4">
        <hr className="bg-white w-25 ml-3" />

        <div className="row p-3">
          <Heading size={"30px"} color={"white"} text={props.head} />
          <Paragraph
            color={"white"}
            align={"left"}
            lineheight={"25px"}
            text={props.text1}
          />
          <Paragraph
            color={"white"}
            align={"left"}
            lineheight={"25px"}
            text={props.text2}
          />
        </div>

        <div className="row p-3 ">
            <div className="col btn ml-2">
                <Outline color={"white"} text={"Contact Us"} />

            </div>
        </div>
      </div>
    </div>
  );
};

export default aboutAdviceCard;
