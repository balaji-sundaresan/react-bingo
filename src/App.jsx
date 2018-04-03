import React from "react";
import Header from "./Header";
import GameBoard from "./GameBoard";
import { getRandomInt } from "./utils.js";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { startGame: false, a: 0, b: 0, c: 0 };
    this.startGame = this.startGame.bind(this);
  }

  startGame() {
    this.setState({
      startGame: true,
      a: getRandomInt(0, 10),
      b: getRandomInt(0, 10),
      c: getRandomInt(0, 10)
    });
  }

  render() {
    return (
      <div>
        <Header startGame={this.startGame} />
        {this.state.startGame && (
          <GameBoard a={this.state.a} b={this.state.b} c={this.state.c} />
        )}
      </div>
    );
  }
}
