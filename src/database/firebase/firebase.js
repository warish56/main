

import React from 'react';
import axios from 'axios';


    let url='https://fir-alpha-580cd.firebaseio.com/feedback.json';


    //used in contact-form component
    //function for submitting the feedback and returning a Promise

  export const  submitPost = (name, email, subject, message) =>{

        let payload={
            name:name,
            email:email,
            subject:subject,
            message:message
        }

        return axios.post(url,payload);

    };



