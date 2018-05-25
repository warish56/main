import React from "react";
import Heading from "../../elements/heading/heading";
import Paragraph from "../../elements/paragraph/paragraph";

const whatWeDo = () => {
  return (
    <section id={"what_We_Do"}>
      <div className="container  p-2">
        <div className="row p-5  justify-content-center">
          <Heading
            size={"40px"}
            color={"black"}
            text={"What can we do for you?"}
          />
          <Paragraph
            align={"center"}
            lineheight={"1"}
            text={
              "It’s indeed a small life. Let’s achieve something together. Let’s recreate and rebuild our lives into something that makes our close ones proud."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default whatWeDo;
