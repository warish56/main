import React from "react";
import Heading from "../../elements/heading/heading";
import Paragraph from "../../elements/paragraph/paragraph";

const whatWeProvideCards = props => {

  //used in about component

  let style = {
    borderRadius: "0"
  };
  return (
    <div style={style} id="about-whatWeProvideCards" className="card p-2 mt-2">
      <div className="card-body align-left text-left">
        <hr className="bg-secondary w-25 ml-3 " />

        <Heading color={"#075aae"} size={"20px"} text={props.head} />

        <br />

        <Paragraph align={"left"} lineheight={"25px"} text={props.text} />
      </div>
    </div>
  );
};

export default whatWeProvideCards;
