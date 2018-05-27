


import React from 'react';

import Heading from '../../elements/heading/heading'
import Paragraph from '../../elements/paragraph/paragraph'



const touch = ()=>{


    return(
        <div className="d-flex flex-column text-left">
            <Heading  size={'40px'} color={'black'} text={"Get in touch"}/>
            <Paragraph align={'left'} lineheight={'25px'} color={'grey'} text={"Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum."}/>

            <p style={{fontSize:'14px'}}><i  className="material-icons px-1  ">phone</i> Phone: +1 910-626-85255</p>

            <p  style={{fontSize:'14px'}}> <a href="#" ><span className="fa fa-envelope px-2"> </span>Email: contact@heatherscott.com</a></p>

            <p style={{fontSize:'14px'}}>
                <span className="fa fa-map-marker px-2"> </span> CB-28 Kolkata- 700 018
            </p>


        </div>
    );
}

export default touch;