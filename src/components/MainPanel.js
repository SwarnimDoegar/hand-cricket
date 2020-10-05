import React, { Component } from "react";
import PlayArea from "./PlayArea";
import ButtonOptions from "./ButtonOptions";
import Score from "./Score";
import reload from "../assets/refresh.svg";

class MainPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerVal: 0,
      compVal: 0,
      score: 0,
      batting: 0,
      playerScore: 0,
      compScore: 0,
      teamplayed: false,
      playing: true,
    };
  }
  componentDidUpdate() {
    if (this.state.teamplayed && this.state.playing) {
      if (this.state.compScore > this.state.playerScore) {
        alert(
          `Comp Won\nPlayer Score: ${this.state.playerScore}\nComp Score: ${this.state.compScore}`
        );
        this.setState({
          playing: false,
        });
        let res = window.confirm("Play Again?");
        if (res) {
          this.setState({
            playerVal: 0,
            compVal: 0,
            score: 0,
            batting: 0,
            playerScore: 0,
            compScore: 0,
            teamplayed: false,
            playing: true,
            end: false,
          });
        }
      }
    }
  }
  handleClick = (num) => {
    let compChoice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    if (this.state.playing) {
      if (compChoice === num) {
        if (!this.state.teamplayed) {
          this.setState({
            batting: !this.state.batting,
            teamplayed: true,
            score: 0,
            playerVal: num,
            compVal: compChoice,
          });
          alert(`Player Score: ${this.state.playerScore}`);
        } else {
          if (this.state.playerScore > this.state.compScore) {
            alert(
              `Player Won!\nPlayer Score: ${this.state.playerScore}\nComp Score: ${this.state.compScore}`
            );
          } else if (this.state.playerScore === this.state.compScore) {
            alert(
              `Draw\nPlayer Score: ${this.state.playerScore}\nComp Score: ${this.state.compScore}`
            );
          } else {
            alert(
              `Comp Won\nPlayer Score: ${this.state.playerScore}\nComp Score: ${this.state.compScore}`
            );
          }
          this.setState({
            playing: false,
          });
          let res = window.confirm("Play Again?");
          if (res) {
            this.setState({
              playerVal: 0,
              compVal: 0,
              score: 0,
              batting: 0,
              playerScore: 0,
              compScore: 0,
              teamplayed: false,
              playing: true,
              end: false,
            });
          }
        }
      } else {
        if (this.state.batting) {
          this.setState({
            score: this.state.score + compChoice,
            compScore: this.state.compScore + compChoice,
            playerVal: num,
            compVal: compChoice,
          });
        } else {
          this.setState({
            score: this.state.score + num,
            playerScore: this.state.playerScore + num,
            playerVal: num,
            compVal: compChoice,
          });
        }
      }
    }
  };

  reload = () => {
    if (!this.state.playing) {
      this.setState({
        playerVal: 0,
        compVal: 0,
        score: 0,
        batting: 0,
        playerScore: 0,
        compScore: 0,
        teamplayed: false,
        playing: true,
        end: false,
      });
    }
  };
  render() {
    return (
      <div className="container main-panel">
        <div className="row rl-div" onClick={this.reload}>
          <img className="reload" src={reload} alt="RELOAD"></img>
          <h5 className="col-3 reload-text">Reload</h5>
        </div>
        <div className="row justify-content-center play-area">
          <div className="col-sm-12 col-lg-8">
            <PlayArea
              playerVal={this.state.playerVal}
              compVal={this.state.compVal}
              batting={this.state.batting}
            />
          </div>
          <div className="col-sm-12 col-lg-10">
            <ButtonOptions clickHandler={this.handleClick} />
          </div>
        </div>
        <div className="row justify-content-center no-gutters">
          <div className="col-sm-12 col-md-8 align-self-end">
            <Score score={this.state.score} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPanel;
