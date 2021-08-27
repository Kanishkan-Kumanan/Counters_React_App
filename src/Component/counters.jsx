import * as React from "react";

import { Component } from "react";

import Car from "./counter";

class Counters extends Component {
 

  render() {
    return (
    
      <div>
         <button className="btn btn-primary btn-sm m-2" onClick={this.props.onReset}>Reset</button>
        {this.props.counters.map((counter) => (
          <Car
            key={counter.id}
            counter = {counter}
            selected={true}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onReset ={this.props.onReset}
                 />
        ))}
      </div>
    );
  }
}

export default Counters;
