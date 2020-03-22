import React from "react";
import ReactDOM from "react-dom";

class CountCharacters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      counter: 10
    };
  }

  onMessageChange(text) {
    this.setState({
      message: "Message has " + text.length + " number of Characters"
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to Count Characters Component...</h2>
        <p>
          <label>
            Enter Message :{" "}
            <input
              type="text"
              onChange={e => this.onMessageChange(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>{this.state.message}</label>
        </p>
        <p>
          <label>{this.state.counter}</label>
        </p>
      </div>
    );
  }
}

class Employee extends React.Component {
  state = { counter: 0 };
  addEmployee = () => {
    this.setState({ counter: this.state.counter + 1 });
    // this.counter = this.counter + 1;
    // alert("Adding a New Employee");
    // alert("Clicked " + this.counter + " times.");
  };
  render() {
    return (
      <div>
        <h2>Welcome to Employee Component..</h2>
        <p>
          <button onClick={this.addEmployee}>Add Employee</button>
        </p>
        <p>
          <label>
            Add Employee Button is Clicked : <b>{this.state.counter}</b> times.
          </label>
        </p>
      </div>
    );
  }
}

const element = <CountCharacters></CountCharacters>;

ReactDOM.render(element, document.getElementById("root"));
