import React from "react";
import FillButton from "../../elements/buttons/fill";

const goal = () => {
  return (
    <section
      id="goal"
      className=" d-flex flex-row text-center text-white align-items-center justify-content-center"
    >
      <div className="align-self-center col-xl-6 col-sm ">
        <hr className="bg-white w-25" />
        <p className="h2 py-2">
          Let us help you overshoot your goals in the right ways.
        </p>

        <div className="row justify-content-center">
          <FillButton text={"Start Now"} />
        </div>
      </div>
    </section>
  );
};

export default goal;
