import React from 'react';
import Outline from '../buttons/outline'

const doCard = (props) => {

    let style ={
        fontSize :'35vm'
    }

    let textStyle={
        fontSize:'0.8rem'
    }

    return (
          <div className="card  home-doCard  mt-2 pt-4 pb-4 pl-3 pr-3">

                <div className="card-body">

                    <div className="d-flex flex-column ">
                    <hr className="bg-white w-25 ml-3"/>
                <p style={style} className=" p-2 align-self-start">{props.head}</p>
                <p style={textStyle} className="home-doCard-text text-justify align-self-center">{props.text}</p>

                    <br/>
                    <div className=" home-doCard-readMore align-self-start">
                        <Outline  text={"Read More"}/>

                    </div>

                    </div>
                </div>

          </div>
    )
}

export default  doCard;