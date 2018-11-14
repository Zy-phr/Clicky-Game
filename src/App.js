import React, { Component } from 'react';
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Score from "./components/Score";
import pokes from "./pokes.json";

class App extends Component {
  state = {
    message: "Click on any Rick & Morty Character to start!",
    message2: "But don't click on it twice or you'll lose!",
    highScore: 0,
    runningScore: 0,
    pokes: pokes,
    unselectedPokes: pokes
  }

  //invoked to load component data
  componentDidMount() {
  }

  //function to shuffle characters
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  selectPoke = name => {
    const findPoke = this.state.unselectedPokes.find(item => item.name === name);

    if (findPoke === undefined) {
      this.setState({
        message: "You already guessed that Rick & Morty Character!  GAME OVER!!!",
        highScore: (this.state.runningScore > this.state.highScore) ? this.state.runningScore : this.state.highScore,
        runningScore: 0,
        pokes: pokes,
        unselectedPokes: pokes
      });
    }
    else {
      // success to select a new character
      const newPokes = this.state.unselectedPokes.filter(item => item.name !== name);

      this.setState({
        message: "Keep guessing!",
        runningScore: this.state.runningScore + 1,
        pokes: pokes,
        unselectedPokes: newPokes
      });
    }

    this.shuffleArray(pokes);
  };
  render() {
    return (
      <div>
        <Title backgroundImage="./images/header.jpg">
          <h1>Clicky-Game!</h1>
        </Title>
        <Score
          message={this.state.message}
          message2={this.state.message}
          runningScore={this.state.runningScore}
          highScore={this.state.highScore}
        />
        <Wrapper>
          {
            this.state.pokes.map(poke => (
              <Cards
                name={poke.name}
                image={poke.image}
                selectPoke={this.selectPoke}
                runningScore={this.state.runningScore}
              />
            ))
          }
        </Wrapper>
        <Footer backgroundImage="./images/header.jpg">
        </Footer>
      </div>
    );
  }
}
export default App;
