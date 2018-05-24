import React from 'react';

const carousel = () =>{

    return(

        <div  id="slider" className="carousel slide">

            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active text-white">
                    <p >
                        I am slide content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>

                <div className="carousel-item active text-white">
                    <p >
                        I am slide content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>

                <div className="carousel-item active text-white">
                    <p >
                        I am slide content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>
            </div>

            <a href="#slider" className="carousel-control-prev" data-slide="prev">
                <span className="carousel-control-prev-icon"> </span>
            </a>


        </div>
    );
};

export default carousel;