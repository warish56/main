
import React from 'react';
import Navbar from '../components/Nav/navbar/navbar'
import Home from '../components/home/intro'
import About from '../components/about/about'

import {Route} from 'react-router-dom';


class main extends  React.Component{


    render(){
        return(
            <div>
                <Navbar/>

                <Route path={"/"} exact component={Home}/>
                <Route path={"/about"} component={About}/>
            </div>
        )
    }
}

export default main;