import * as React from "react";

import { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

class Car extends Component {
 
  styles = {
    fontSize: 35,
    color: "blue",
    fontWeight: "bold"
  };

  stylex = {
    fontSize: 15,
    margin: 5
  };
 
  render() {
    console.log(this.props);
    return (
      <div>
        <span style={this.stylex} className={this.newclasses()}>
          <h1>{this.props.counter.value}</h1>
        </span>
        <button onClick= {() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">
          Increment
        </button>
        <button className="btn btn-danger btn-sm m-2" onClick={() =>this.props.onDelete(this.props.counter.id)}>Delete</button>
        <br />
       
      </div>
    );
  }

  newtags() {
    if (this.state.tags.length === 0) return <p> No tags </p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key="tag">{tag}</li>
        ))}
      </ul>
    );
  }

  newclasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Car;
