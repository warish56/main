import React from "react";

const storyOutline = props => {

    //a specific elongated button used in home-story component

  return (
    <div className=" text-center p-2 home-storyOutline-btn">
      <p className="mt-2 ">{props.text}</p>
    </div>
  );
};

export default storyOutline;
