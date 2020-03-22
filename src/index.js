import React from "react";
import ReactDOM from "react-dom";

class Employee extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h2>Employee details...</h2>
        <p>
          <label>
            Employee ID : <b>{this.props.Id}</b>
          </label>
        </p>
        <p>
          <label>
            Employee Name : <b>{this.props.Name}</b>
          </label>
        </p>
        <p>
          <label>
            Employee Location : <b>{this.props.Location}</b>
          </label>
        </p>
        <p>
          <label>
            Employee Salary : <b>{this.props.Salary}</b>
          </label>
        </p>
        <Department
          DeptName={this.props.DeptName}
          HeadName={this.props.HeadName}
        ></Department>
      </div>
    );
  }
}

class Department extends React.Component {
  render() {
    return (
      <div>
        <h2>Department Details...</h2>
        <p>
          <label>
            Dept Name : <b>{this.props.DeptName}</b>
          </label>
        </p>
        <p>
          <label>
            Head Name : <b>{this.props.HeadName}</b>
          </label>
        </p>
      </div>
    );
  }
}

const element = (
  <Employee
    Id="101"
    Name="Pragim"
    Location="Bangalore"
    Salary="12345"
    DeptName="Dev"
    HeadName="Pragim Tech"
  ></Employee>
);

ReactDOM.render(element, document.getElementById("root"));
