import React from "react";

export default class GameBoard extends React.Component {
  constructor() {
    super();
    this.handleCellClick = this.handleCellClick.bind(this);
    this.state = {
      clicked: [false, false, false, false, false, false, false, false, false],
      gameOver: false,
      won: false
    };
  }

  handleCellClick(val) {
    let clicked = this.state.clicked;
    clicked[val - 1] = !clicked[val - 1];
    let clickedVals = [];
    clicked.map((isClicked, index) => {
      if (isClicked) {
        clickedVals.push(index + 1);
      }
    });

    if (clickedVals.length === 3) {
      this.setState({
        clicked,
        gameOver: true,
        won:
          clickedVals.includes(this.props.a) &&
          clickedVals.includes(this.props.b) &&
          clickedVals.includes(this.props.c)
      });
    } else {
      this.setState({ clicked });
    }
  }

  render() {
    return (
      <div className="container">
        <p />
        <div className="d-flex justify-content-center">
          <h1 style={{ textAlign: "center" }}>Bingo!!!</h1>
          <div className="btn btn-danger btn-lg">00</div>&nbsp;&nbsp;
          <div className="btn btn-danger btn-lg">03</div>
        </div>
        <p />
        {this.state.gameOver ? (
          <div className="alert alert-success">
            {this.state.won ? "You Won" : "You Lost"}
          </div>
        ) : (
          <div>
            <div style={{ textAlign: "center" }}>
              <div className="btn btn-primary btn-lg">{this.props.a}</div>&nbsp;&nbsp;
              <div className="btn btn-primary btn-lg">{this.props.b}</div>&nbsp;&nbsp;
              <div className="btn btn-primary btn-lg">{this.props.c}</div>&nbsp;&nbsp;
              <p />
              <table
                className="table table-bordered table-striped"
                align="center"
                style={{ width: "35%" }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        textAlign: "center",
                        background: this.state.clicked[0] ? "green" : ""
                      }}
                      onClick={() => this.handleCellClick(1)}
                    >
                      1
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        background: this.state.clicked[1] ? "green" : ""
                      }}
                      onClick={() => this.handleCellClick(2)}
                    >
                      2
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        background: this.state.clicked[2] ? "green" : ""
                      }}
                      onClick={() => this.handleCellClick(3)}
                    >
                      3
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "center",
                        background: this.state.clicked[3] ? "green" : ""
                      }}
                      onClick={() => this.handleCellClick(4)}
                    >
                      4
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        background: this.state.clicked[4] ? "green" : ""
                      }}
                      onClick={() => this.handleCellClick(5)}
                    >
                      5
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        background: this.state.clicked[5] ? "green" : ""
                      }}
                      onClick={() => this.handleCellClick(6)}
                    >
                      6
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "center",
                        background: this.state.clicked[6] ? "green" : ""
                      }}
                      onClick={() => this.handleCellClick(7)}
                    >
                      7
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        background: this.state.clicked[7] ? "green" : ""
                      }}
                      onClick={() => this.handleCellClick(8)}
                    >
                      8
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        background: this.state.clicked[8] ? "green" : ""
                      }}
                      onClick={() => this.handleCellClick(9)}
                    >
                      9
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  }
}
