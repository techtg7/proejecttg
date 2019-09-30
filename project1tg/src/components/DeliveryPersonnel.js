import React from "react";
// import ReactDOM from "react-dom";
import ImageAvtar from "../assets/images/man.png";

class DeliveryPersonal extends React.Component {
  state = {
    name: "",
    id: "",
    status: ""
  };

  componentDidMount() {
    this.setState({
      name: this.props.name,
      id: this.props.id,
      status: this.props.status
    });
  }
  render() {
    const nameStyle = {
      fontSize: "12px",
      color: "red"
    };
    return (
      <div className="text-center">
        <img src={ImageAvtar} width="30" alt={this.props.name}></img>
        <br />
        <p style={nameStyle}>{this.props.name}</p>
      </div>
    );
  }
}

export default DeliveryPersonal;
