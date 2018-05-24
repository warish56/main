import React from 'react';
import Outline from '../buttons/outline'
import cardsCss from '../../css/cards.css'
import buttonCss from '../../css/buttons.css'
import imageCss from '../../css/image.css'
import mediaTabletCss from '../../css/mediaQuery_Tablet.css'
import mediaSmallPhoneCss from '../../css/mediaQuery_SmallPhone.css'


const advice = (props) => {

    let adviceText={
        fontSize:'0.875rem',
    }

    let adviceHead= props.img ?{
        fontSize:'2.1875rem',
    } : {
        fontSize:'2.1875rem'
    };


    let image= props.img ?

        <div className="col-sm-4 col-md-4 d-none d-sm-block home-advice-tool">

        </div> : null;

    return (
        <div className="card home-adviceCard p-2 mt-4">

            <div className="card-body">

                <div className="row ">

                        {image}


                    <div className="col-sm ">
                        <p style={adviceHead} className="h3 p-2 home-advice-card-head">{props.head}</p>
                        <p style={adviceText} className="text-dark">{props.text1}</p>
                        <p style={adviceText} className="mt-3 text-dark">{props.text2}</p>

                        <p   className="mt-2 text-dark ">{props.foot}</p>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default  advice;