import React from 'react';
import StoryOutline_Btn from '../../elements/buttons/storyOutline'
import style from "./homeStyle.css";

const story= () => {

    let headStyle={
        color:'#075aae',
        fontSize:'4vm',
        fontWeight: '100'
    };
    let storyText={
        fontSize: '13px',
        lineHeight: '25px'
    }

    return (
        <section className="story-row py-4 ">

            <div className="container ">
                <div className="row  justify-content-center py-5">
                    <div className="col-sm col-lg-5 p-5  text-left bg-white">



                        <h2 className="pb-2" style={headStyle}>Our story</h2>
                        <p style={storyText}>
                            Alien Brains is a lab where we work on turning our dream ideas into real projects. We aim to build a team of passionate innovators who can either take part in ongoing developments of a product or they can start a new line of a product under the guidance of mentors.
                        </p>

                        <p style={storyText}>
                            In the words of the founder, “The human brain has no bound to what it can learn or what it can achieve, limited only by the ifs and buts created by the other human brains around them.” Hence, we see ourselves as a cradle of innovation where we research, train and guide the innovators of today to develop products that matter.
                        </p>


                       {/*Button*/}
                        <StoryOutline_Btn text={'Read Our Story'}/>



                    </div>

                    <div className="col-sm p-0 col-lg-5  ">
                        <img src={require("../../Assets/story.png")} className="img-fluid home-story-img w-100"/>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default story;