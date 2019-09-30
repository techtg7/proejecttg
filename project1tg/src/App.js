import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import DeliveryPersonal from "./components/DeliveryPersonnel";
import Persons from "./delivery_personnel_data";
import AssignRevoke from "./components/AssignRevoke";
import "./App.css";
class App extends React.Component {
  state = {
    assigned: [],
    revoked: []
  };

  componentDidMount() {
    this.setState({ assigned: [], revoked: Persons });
    console.log(this.state.revoked);
  }

  displayRevoked = () => {
    if (this.state.revoked.length > 0) {
      return this.state.revoked.map((person, key) => (
        <div className="col" key={key}>
          <DeliveryPersonal
            name={person.name}
            id={person.id}
            status={person.status}
          ></DeliveryPersonal>
        </div>
      ));
    } else {
      return <p className="text-danger p-3">No Person to Assign</p>;
    }
  };

  displayAssigned = () => {
    if (this.state.assigned.length > 0) {
      return this.state.assigned.map((person, key) => (
        <div className="col" key={key}>
          <DeliveryPersonal
            name={person.name}
            id={person.id}
            status={person.status}
          ></DeliveryPersonal>
        </div>
      ));
    } else {
      return <p className="text-danger p-3">No Person to Revoke</p>;
    }
  };

  assignPerson = ev => {
    if (this.state.revoked.length === 0) {
      return;
    }
    const revokedPersons = this.state.revoked;
    const person = revokedPersons.shift();
    const newAssigned = this.state.assigned;
    newAssigned.push(person);

    this.setState({
      revoked: revokedPersons,
      assigned: newAssigned
    });
  };

  revokePerson = ev => {
    if (this.state.assigned.length === 0) {
      return;
    }
    const assignedPersons = this.state.assigned;
    const person = assignedPersons.shift();
    const newRevoked = this.state.revoked;
    newRevoked.push(person);

    this.setState({
      revoked: newRevoked,
      assigned: assignedPersons
    });
  };
  render() {
    return (
      <div className="container bg-white p-3 shadow-sm border">
        <h3 className="text-primary text-center m-2">
          Total Cloud Delivery Personnel Manager
        </h3>
        <div className="row p-3">
          <div className="col-md-4 border p-3" style={{ height: "300px" }}>
            <h6 className="text-center">Revoked</h6>
            <div className="row">{this.displayRevoked()}</div>
          </div>
          <div className="col-md-4 border d-flex justify-content-center align-items-center flex-column">
            <AssignRevoke
              assign={this.assignPerson}
              revoke={this.revokePerson}
            ></AssignRevoke>
          </div>
          <div className="col-md-4 border p-3" style={{ height: "300px" }}>
            <h6 className="text-center">Assigned</h6>

            <div className="row">{this.displayAssigned()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
