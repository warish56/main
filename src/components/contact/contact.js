

import React from 'react';
import Touch from './touch'
import ContactStyle from './contactStyle.css'
import Form from './form'
import CustomCard from '../../elements/cards/customCard'
import Goal from '../home/goal'
import Footer from '../Nav/footer/footer'
import Heading from '../../elements/heading/heading'

const contact = ()=>{

    return(


        <div>
        <section id="contact-image">
            <div className="container-fluid d-flex flex-row justify-content-start align-items-center  " id="contact-intro-img">

                <div className="col-4 ml-4">
                    <Heading   size={'55px'} color={'white'} text={'Contact  me'}/>

                </div>
            </div>
        </section>

          <section id="user-interact">
              <div className="container">
                  <div className="row py-4">

                      <div className="col-sm py-4">
                       <Touch/>
                      </div>

                      <div className="col-sm py-4">
                      <Form/>
                      </div>

                      <div className="col-sm py-4">
                      <CustomCard bgcolor={'#fafafa'} head={'Need advice?'} text1={'Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua ut enim ad minim. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum error sit voluptatem accusantium.'} text2={'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut unde omnis iste natus error sit.'} foot={'Call Me'}/>
                      </div>
                  </div>
              </div>

            </section>


            <Goal/>
            <Footer/>

        </div>




    );

}

export default contact;