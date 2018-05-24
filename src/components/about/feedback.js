
import React from 'react'
import Heading from '../../elements/heading/heading'
import Paragraph from '../../elements/paragraph/paragraph'
import FeedbackCard from '../../elements/cards/feedbackCard'

 const  feedback = ()=> {

    return(
        <section id="feedback-about">

            <div className="container py-5">

                <Heading size={'40px'} text={'Feedback & Reviews'} color={'#075aae'}/>
                <Paragraph lineheight={'25px'} align={'center'} text={'We have been always very open to our critics, and have always lent our ears to the feedbacks. Let’s look at some of them.'}/>

                <div className="row p-1 justify-content-center">

                    <div className="col-sm">
                    <FeedbackCard color={'#075aae'} personLine={'Lol at Somewhere'} person={'ABC'} text={'” Aenean sollicitudin, lorem quis auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit.  “'}/>
                    </div>

                    <div className="col-sm">
                        <FeedbackCard color={'#075aae'} personLine={'CREAMMMMMMM'} person={'Dram'} text={'” Aenean sollicitudin, lorem quis auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit.“'}/>
                    </div>

                    <div className="col-sm">
                        <FeedbackCard color={'#075aae'} personLine={'I want to go to zoo'} person={'Giraffe'} text={'” Aenean sollicitudin, lorem quis auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit.“'}/>

                    </div>

                </div>

            </div>


        </section>
    )
 }

 export default feedback;