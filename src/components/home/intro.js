import React from "react";

import style from "./homeStyle.css";
import cardsCss from '../../css/cards.css'
import buttonCss from '../../css/buttons.css'
import imageCss from '../../css/image.css'
import mediaTabletCss from '../../css/mediaQuery_Tablet.css'
import mediaSmallPhoneCss from '../../css/mediaQuery_SmallPhone.css'
// import LargeLaptopCss from '../../css/mediaQuery_Large.css'




import FillButton from '../../elements/buttons/fill';
import OutlineButton from '../../elements/buttons/outline';
import Todo from './Do';
import Goal from './goal';
import Testimonial from './testimonial'
import Story from './story';
import Footer from '../Nav/footer/footer'

class home extends React.Component{

    render()
    {
        return (
            <div className="container-fluid p-0" >
                <div className="d-flex flex-row p-2 text-white text-left " id="home-intro-img">

                    <div className="align-self-center px-2">


                        <p  className="col-md-10 p-0 h1" >
                            It's time to make the mind follow the heart.
                        </p>


                        <p className="h4 text-left">Be Yourself

                            <span className="p-1" id="intro-span">Unapologetically</span>
                        </p>


                        <div className="d-flex flex-row">
                            <div className=" align-self-start ">
                                <FillButton text={"Start Now"} />
                            </div>
                            <div className=" align-self-end px-2 ">
                                <OutlineButton text={"Read More"} />
                            </div>

                        </div>



                    </div>

                  </div>

                <Todo/>
                {/*<Testimonial/>*/}
                <Story/>
                <Goal/>
                <Footer/>


                </div>

        );
    }
}

export default home;
