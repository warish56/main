import React from "react";
import FillButton from "../../elements/buttons/fill";
import CircleButton from '../../elements/buttons/cicularButton'

const goal = () => {
  return (
    <section
      id="goal"
      className=" d-flex flex-row text-center text-white align-items-center justify-content-center">

      <div className="align-self-center col-xl-6 col-sm ">
        <hr className="bg-white w-25" />
        <p className="h2 py-2 head">
          Let us help you overshoot your goals in the right ways.
        </p>

        {/*Button section starts*/}
        <div   className="row justify-content-center btn">
          <CircleButton bgcolor={'#8E24AA'} textcolor={'white'} text={"Start Now"}/>
          {/*<FillButton bgcolor={'white'} textcolor={'black'} text={"Start Now"} />*/}
        </div>
          {/*Button section ends*/}

      </div>
    </section>
  );
};

export default goal;
