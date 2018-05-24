
import React from 'react';
import Docard from '../../elements/cards/do_Card'
import Advice from '../../elements/cards/advice'


const todo = () =>{



return(
    <div className="container-fluid text-center p-2">

        {/*Text*/}
        <div className="p-3">
            <div className="col-xl-5 m-auto">
                <p className="h3 p-3"> What we do </p>
                <p className="text-muted"> We make your journey towards your destination better.
                    Life is</p>
            </div>

        </div>

            {/*Cards Section*/}


        <div className="container p-0">

        <div className="row   text-left text-white justify-content-between  ">

            {/*column-1*/}

            <div className="col-sm  col-md-4 col-lg-4 col-xl-4">
                <Docard  head={'Workshops'} text={"Workshops are delivered by Technology Experts on various themes to help the participants get an overview of the subject. It is a bridge to proceed to the advanced level."}/>
            </div>

            {/*column-2*/}
            <div className="col-sm col-md-4 col-lg-4 col-xl-4">
                <Docard  head={'Trainings'} text={"Trainings span from four to six weeks and help bridge the gap between the University and Industry. Students get to learn something different to gain an extra advantage above others."}/>
            </div>



            {/*column-3*/}
            <div className="col-sm col-md-4 col-lg-4  col-xl-4">
                <Docard  head={'Incubation'} text={"Alien Brains is proud as well as happy to announce that we will be providing incubation support to companies and fellow start-ups in terms of office space and technical guidance."}/>
            </div>


            <div className="col-sm col-md-4 col-lg-4 col-xl-4">
                {/*Card-1*/}
                <Advice foot={'Contact Us'} head={'Need advice?'} text1={'Muddled? Addled? Puzzled? In simple words, confused?Just Relax.'} text2={'We, at Alien Brains, are ever-ready to help you with your doubts. Be it anything from technical to career, don’t hesitate to approach us.'}/>

            </div>
            <div className="col-sm col-md-8 col-lg-8 col-xl-8 ">
                {/*card-2*/}

                <Advice img={true} foot={'Read More'} head={' Our upcoming seminars and Workshops'} teaxt1={'Our upcoming seminars and Workshops'} text2={'To quench your thirst for knowledge and technology we have a series of workshops and seminars lined up for you.'}/>

            </div>

        </div>
        </div>

    </div>
)
};
export default todo;