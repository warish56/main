

import React from 'react';
import Touch from './touch'
import ContactStyle from './contactStyle.css'
import mediaQuery_small from '../../css/mediaQuery_SmallPhone.css'
import mediaQuery_Tablet from '../../css/mediaQuery_Tablet.css'
import Form from './form'
import CustomCard from '../../elements/cards/customCard'
import Goal from '../home/goal'
import Footer from '../Nav/footer/footer'
import Heading from '../../elements/heading/heading'

const contact = ()=>{

    return(


        <div>
            {/*Contact front image section starts*/}
        <section id="contact-image">
            <div   id="contact-intro-img" className="container-fluid d-flex flex-row justify-content-start align-items-center ">

                <div  className="col-12 col-md-6 text-white align-self-center">
                    <Heading size={'55px'} color={'white'} text={'Contact me'}/>
                </div>

            </div>
        </section>
            {/*Contact front image section ends*/}

            {/*Contact user interaction section starts*/}
          <section id="user-interact">
              <div className="container">
                  <div className="row py-4">

                      <div className="col-sm py-4">
                          {/*Get in touch component*/}
                       <Touch/>
                      </div>

                      <div className="col-sm py-4">
                          {/*the form component*/}
                      <Form/>
                      </div>

                      <div className="col-sm py-4">
                          {/*the custom card of contact component*/}
                      <CustomCard bgcolor={'#fafafa'} head={'Need advice?'} text1={'Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua ut enim ad minim. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum error sit voluptatem accusantium.'} text2={'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut unde omnis iste natus error sit.'} foot={'Call Me'}/>
                      </div>
                  </div>
              </div>

            </section>

            {/*Contact user interaction section ends*/}


            <Goal/>
            <Footer/>

        </div>




    );

};

export default contact;