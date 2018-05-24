
import React from 'react';

const outline = (props)=>{

    let style={
        color : props.color ? props.color : 'black'
    }

    return(
        <div style={style} className="  text-white text-center p-1 outline-btn">
            <p className="mt-2 lead h4">{props.text}</p>
        </div>
    )
};

export default outline;