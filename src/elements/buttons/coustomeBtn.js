import React from "react";

const custom = props => {
    let style={
        backgroundColor: props.bgcolor,
        color:props.textcolor,
        width:'100px',
        height : '40px',
        cursor:'pointer'

    }

    return (
        <div style={style} className=" custom-btn  text-center p-1 ">
            <p className="mt-1">{props.text}</p>
        </div>
    );
};

export default custom;
