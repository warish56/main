

import React from 'react';
import axios from 'axios';


    let url='https://fir-alpha-580cd.firebaseio.com/feedback.json';


  export const  submitPost = (name, email, subject, message) =>{

        let payload={
            name:name,
            email:email,
            subject:subject,
            message:message
        }

        return axios.post(url,payload);

    };



