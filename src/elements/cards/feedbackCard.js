
import React from 'react';
import Paragraph from '../paragraph/paragraph'

const feedbackCard = (props) =>{

    let style={
        borderRadius:'0',
        color : props.color,
        textAlign:'justify',

    }
    return(

        <section id="feedback">
            <div style={style} className="card p-4 mt-2 about-feedback-card">
                <div className="card-body text-center p-3">

                    <div className="d-flex flex-column ">
                     <span style={{fontSize:'30px'}} className="fa p-2 fa-quote-right align-self-center"> </span>

                        <Paragraph  className="align-self-center" italic={true} lineheight={'25px'} text={props.text}/>

                        <div className="align-self-center about-feedback-card-footer">
                        <p className="mt-3">{props.person}</p>
                        <p>{props.personLine}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
};
export default feedbackCard;