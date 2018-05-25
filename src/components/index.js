import React from "react";
import Navbar from "../components/Nav/navbar/navbar";
import Home from "../components/home/intro";
import About from "../components/about/about";
import Contact from '../components/contact/contact'

import { Route } from "react-router-dom";

class main extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

          <Route path={"/"} exact component={Home} />
          <Route path={"/about"} component={About} />
          <Route path={"/contact"} component={Contact} />
      </div>
    );
  }
}

export default main;
