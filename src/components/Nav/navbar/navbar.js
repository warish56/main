import React from "react";
import { NavLink } from "react-router-dom";

class navbar extends React.Component {
  render() {
    return (
      <nav className="container-fluid  m-0  ">
        <div className=" row align-items-center justify-content-between p-2">
          <div className="col-xl-2 col-md-2  col-sm ">
            <img
              className=" img-fluid "
              src={require("../../../Assets/brains.png")}
            />
          </div>
          <div className="col-xl-3 col-md-5  col-sm  ">
            <ul className="list-inline ">

              <NavLink activeStyle={{ color: "black" }} exact to="/">
                <li  className="list-inline-item p-2 btn">Home</li>
              </NavLink>

              <NavLink activeStyle={{ color: "black" }} exact to="/about">
                  <li  className="list-inline-item p-2 btn">About</li>
              </NavLink>

              <NavLink activeStyle={{ color: "black" }} exact to="/contact">
                <li   className="list-inline-item p-2 btn">Contact</li>
              </NavLink>

            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default navbar;
