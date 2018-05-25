import React from "react";

const heading = props => {
  let style = {
    fontSize: props.size,
    color: props.color
  };
  return (
    <section id="hedaing">
      <p style={style}>{props.text}</p>
    </section>
  );
};
export default heading;
