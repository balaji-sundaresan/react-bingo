import React from "react";

export default class User extends React.Component {
  constructor() {
    super();
    this.state = { userName: "", userAddedInd: false };
    this.updateUserName = this.updateUserName.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  updateUserName(e) {
    this.setState({ userName: e.target.value });
  }

  addUser() {
    this.setState({
      userAddedInd: true,
      userName: this.state.userName === "" ? "Guest" : this.state.userName
    });
    this.props.startGame();
  }

  render() {
    return (
      <div>
        {!this.state.userAddedInd ? (
          <div className="card-header">
            <div className="card-body">
              <input
                value={this.state.userName}
                onChange={this.updateUserName}
                placeholder="Add User to start game"
              />&nbsp;
              <button onClick={this.addUser}>Add User</button>
            </div>
          </div>
        ) : (
          <div className="card-header">
            <div className="card-body">
              <div style={{ textAlign: "right" }}>{this.state.userName}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
