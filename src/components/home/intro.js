import React from "react";
import {NavLink} from 'react-router-dom'

import style from "./homeStyle.css";
import cardsCss from "../../css/cards.css";
import animationCss from "../../css/animation.css";

import buttonCss from "../../css/buttons.css";
import imageCss from "../../css/image.css";
import mediaTabletCss from "../../css/mediaQuery_Tablet.css";
import mediaSmallPhoneCss from "../../css/mediaQuery_SmallPhone.css";

import FillButton from "../../elements/buttons/fill";
import OutlineButton from "../../elements/buttons/outline";
import Todo from "./Do";
import Goal from "./goal";
import Testimonial from "./testimonial";
import Story from "./story";
import Footer from "../Nav/footer/footer";

class home extends React.Component {


    redirect = () =>{
        this.props.history.push('/about');
  }

  render() {
    return (
      <div className="container-fluid p-0" id="home">



          {/*Intro Image Section in front View Starts*/}
        <div
          className="d-flex flex-row py-5 text-white text-left "
          id="home-intro-img">


          <div className="col-sm-6 col-md-10 col-xl-6  align-self-center ml-2 home-intro-text">
            <p  className="  h1 animate-left-1 ">
              It's time to make the mind follow the heart.
            </p>

            <p className=" h4 text-left  text-white animate-left-2">
              Be Yourself
              <span className="p-1" id="intro-span">
                Unapologetically
              </span>
            </p>

              {/*Buttons Section for front image starts*/}

            <div className=" row ">

              <div    className=" col-4 p-1 btn animate-zoom-in-1">
                <div className="btn">
                    <FillButton textcolor={'black'} bgcolor={'white'} text={"Start Now"} />

                </div>
              </div>

              <div   onClick={this.redirect} className=" col-4 p-1 animate-zoom-in-2">
                <div className="btn">
                    <OutlineButton  text={"Read More"} />

                </div>
              </div>

            </div>

              {/*Buttons Section for front image ends*/}
          </div>

        </div>
          {/*Intro Image Section in front View Ends*/}

          {/*The Do Cards Section */}
          <Todo />

          {/*<Testimonial/>*/}

          {/*the Story section*/}
          <Story />

          {/*The goal Section*/}
          <Goal />

          {/*the footer section*/}
          <Footer />

      </div>
    );
  }
}

export default home;
