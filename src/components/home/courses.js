

import React from 'react';
import OutlineIcon from '../../elements/icons/outlineIcon'
import AngularImage from '../../Assets/angular.png'
import ReactImage from '../../Assets/react.png'
import RubyImage from '../../Assets/ruby.png'
import AmazonImage from '../../Assets/amazon.png'
import SqlImage from '../../Assets/sql.png'
import MongoDBImage from '../../Assets/mongo.png'
import Heading from '../../elements/heading/heading'
import Paragraph from '../../elements/paragraph/paragraph'

const courses = ()=> {

    return(
       <section  id="home-courses">
           <div className="container p-5   ">


               <div className="row text-white ">


                   {/*Icons Section*/}
               <div className="col-sm ">

                   <div className="row">
                       <div className="col-sm">
                           <ul className="list-unstyled">
                               <li className="py-5 px-4">
                                   <OutlineIcon src={AngularImage}/>
                               </li>

                               <li className="py-5 px-4">
                                   <OutlineIcon src={ReactImage}/>

                               </li>

                               <li className="py-5 px-4">
                                   <OutlineIcon src={RubyImage}/>

                               </li>
                           </ul>

                       </div>
                       <div className="col-sm ">


                           <ul className="list-unstyled">
                               <li className="py-5 px-4">
                                   <OutlineIcon src={SqlImage}/>
                               </li>

                               <li className="py-5 px-4">
                                   <OutlineIcon src={AmazonImage}/>

                               </li>

                               <li className="py-5 px-4">
                                   <OutlineIcon src={MongoDBImage}/>

                               </li>
                           </ul>

                       </div>
                   </div>
               </div>

                   {/*Text Section*/}
                   <div className="col-sm p-5 text-center ">
                       <Heading size={'55px'} color={'white'} text={'Services'}/>
                       <hr className="bg-white w-25"/>
                       <Paragraph  textsize={'15px'} color={'white'} align={'left'} lineheight={'25px'} text={'Angular is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS'} />
                       <Paragraph  textsize={'15px'} color={'white'} align={'left'} lineheight={'25px'} text={'Angular is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS'} />
                       <Paragraph  textsize={'15px'} color={'white'} align={'left'} lineheight={'25px'} text={'Angular is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS'} />

                   </div>

           </div>
           </div>
       </section>
    )
};

export default courses;