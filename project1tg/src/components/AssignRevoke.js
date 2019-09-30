import React from "react";

class AssignRevoke extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <button
          className="btn btn-large btn-success w-50 my-3"
          onClick={this.props.assign}
        >
          ASSIGN
        </button>
        <button
          className="btn btn-large btn-danger w-50 my-3"
          onClick={this.props.revoke}
        >
          REVOKE
        </button>
      </React.Fragment>
    );
  }
}
export default AssignRevoke;
