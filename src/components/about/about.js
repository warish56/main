import React from "react";

import aboutStyle_Css from "./about_Style.css";
import cardsCss from "../../css/cards.css";
import buttonCss from "../../css/buttons.css";
import imageCss from "../../css/image.css";
import mediaTabletCss from "../../css/mediaQuery_Tablet.css";
import mediaSmallPhoneCss from "../../css/mediaQuery_SmallPhone.css";

import Paragraph from "../../elements/paragraph/paragraph";
import Heading from "../../elements/heading/heading";
import Feedback from "./feedback";
import WhatWeDo from "./whatWeDo";
import WhatWeProvideCards from "../../elements/cards/whatWeProvideCrads";
import AboutAdviceCards from "../../elements/cards/aboutAdviceCards";
import Goal from "../home/goal";
import Footer from "../Nav/footer/footer";

class about extends React.Component {
  render() {
    return (
      <section id="about">
        {/*Front-Image*/}
          <div className="container-fluid d-flex flex-row   align-items-center " id="about-img">
                  <div className=" col-sm-6 align-self-center">
                      <Heading size={'55px'} color={'white'} text={'About Us'}/>
                  </div>
          </div>

        <div className="container p-1 mt-2">
          <Paragraph
            lineheight={"25px"}
            align={"justify"}
            text={
              "From an idea to a company, a journey that that took us out from wilderness to an ocean full of opportunities, to a place where we had the potential to shape lives of different people in different directions with one thing in similarity, helping each one of them to turn work towards their ideal live, to help them realise that dreams can now be realised."
            }
          />
        </div>

        <br />
        {/*Heading*/}
        <div className="container text-left">
          <Heading
            size={"40px"}
            color={"black"}
            text={"Alien Brains in a nutshell !!"}
          />
        </div>

        {/*Paragraphs*/}
        <div className="container p-2">
          <div className="row justify-content-between">
            <div className="col-sm col-xl-6">
              <Paragraph
                lineheight={"25px"}
                align={"left"}
                text={
                  "Alien Brains started on the belief that the human brain has no bound to what it can learn, limited only by the ifs and buts created by the other human brains around them. Such is the influence on most of them, that their own brain at times becomes alien to them and thus making them forget who they really are and who they can really be few years down the line. The entire team at Alien Brains is dedicated towards helping the innovations of the mind become the reality of tomorrow."
                }
              />
            </div>

            <div className="col-sm col-xl-6">
              <Paragraph
                lineheight={"25px"}
                align={"left"}
                text={
                  "The projects and products are empowered by innovation and creativity to make something that will have a fruitful impact on the society, be it in healthcare, or dealing poverty issues, or making recommendation systems, or agriculture issues, or research on how to make sports facilities better, etc. "
                }
              />
              <br />
              <Paragraph
                lineheight={"25px"}
                align={"left"}
                text={
                  "Thus, we see ourselves as a cradle of innovation where we research and try to develop products that matter and also nurture the young talent buds along with us in our research work and product development, thereby giving them firsthand experience."
                }
              />
            </div>

            <div className="col-sm col-xl-6">
              <Paragraph
                lineheight={"25px"}
                align={"left"}
                text={
                  "We organise workshops, seminars and training programs for both school and college students.The lab, by its unique training program, aspires to unleash the potential of the students of today to make them the innovators of tomorrow. The training program is aimed at giving the participants a kick-start in the technical arena. The uniqueness of our program lies in the fact that the top performers at the end of the program will be hired as interns to work on its different projects and products."
                }
              />
            </div>
          </div>
        </div>

        <Feedback />
        <WhatWeDo />

        <div className="container p-2">
          <div className="row justify-content-center">
            <div className="col-sm col-md-6 col-xl-6">
              <WhatWeProvideCards
                head={"We can come to your university and provide workshops."}
                text={
                  "Workshops are delivered by Technology Experts on various themes to help the participants get an overview of the subject. It is a bridge to proceed to the advanced level."
                }
              />
            </div>

            <div className="col-sm col-md-6 col-xl-6">
              <WhatWeProvideCards
                head={
                  "We can give industrial trainings on topics you and your friends care about."
                }
                text={
                  "Trainings span from four to six weeks and help bridge the gap between the University Curriculum and Industry. Students get to learn something different to gain an extra advantage above others."
                }
              />
            </div>

            <div className="col-sm col-md-6  col-xl-6">
              <WhatWeProvideCards
                head={"We can provide you Incubation."}
                text={
                  "Alien Brains is proud as well as happy to announce that we will be providing incubation support to companies and fellow start-ups in terms of office space and technical guidance."
                }
              />
            </div>

            <div className="col-sm col-md-6 col-xl-6">
              <AboutAdviceCards
                head={"Need advice?"}
                text1={
                  "Muddled? Addled? Puzzled? In simple words, confused?Just Relax"
                }
                text2={
                  "We, at Alien Brains, are ever-ready to help you with your doubts. Be it anything from technical to career, don’t hesitate to approach us."
                }
              />
            </div>
          </div>
        </div>

        <Goal />
        <Footer />
      </section>
    );
  }
}

export default about;
