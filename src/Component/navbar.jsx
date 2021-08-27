import * as React from "react";

import {Component} from "react";

class Navbar  extends Component{
  state ={}
render(){
  return(
  
      <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href>Navbar <span className="badge bg-secondary m-2">{this.props.totalCounters}</span></a>  
      
       </nav>
    
  );
}
}

export default Navbar;