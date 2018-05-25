

import React from 'react';
import Heading from '../heading/heading'
import Paragraph from '../paragraph/paragraph'
const customCard = (props)=>{


    let style={
        backgroundColor: props.bgcolor,

    };

    let footStyle={
        cursor:'pointer',
        color:'#075aae',
    }



    return(
        <div style={style} className="card py-5 px-2 text-left">
            <div className="card-body py-3 ">

                <Heading size={'40px'} color={'#075aae'} text={props.head}/>
                <Paragraph align={'left'} lineheight={'25px'} text={props.text1}/>
                <Paragraph align={'left'} lineheight={'25px'} text={props.text2}/>

                <p style={footStyle} className="text-primary mt-5 ">{props.foot}</p>
                <hr className="bg-primary w-25 ml-0 "/>
            </div>

        </div>
    )
}

export default customCard;