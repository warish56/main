import React from "react";

const paragraph = props => {
  let style = {
    fontSize: "13px",
    textAlign: props.align,
    lineHeight: props.lineheight,
    color: props.color ? props.color : "#7d8594",
    fontStyle: props.italic ? "italic" : "normal"
  };
  return (
    <section id="paragraph">
      <p style={style}>{props.text}</p>
    </section>
  );
};
export default paragraph;
