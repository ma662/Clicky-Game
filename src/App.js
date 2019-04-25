import React, { Component, Fragment } from "react";

// components
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import GameCard from "./components/GameCard";

// data
import albums from "./albums.json";

var clicked = [];
let score = 0;

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    clicked,
    albums,
    score
  };

  // function handles clicking, score incrementing, array shuffling of the state
  checkClicked = id => {
    // lose condition
    // if filter though clicked array and find the id, 
    // the filter will return a larger than 0 array which means it's already been clicked 
    if (clicked.filter(e => e.id === id).length > 0) {
      alert("You've already clicked this! You Lose!");
      return window.location.reload();
    }

    // score increment
    var tScore = this.state.score;
    tScore++;
    console.log(tScore);
    alert("Score: " + tScore);
    
    // push to clicked array
    // filter result of index 0 because always searching for one id and don't want too many nested arrays
    clicked.push(this.state.albums.filter(selection => selection.id === id)[0]);
    console.log("clicked:", clicked);

    // win condition
    console.log(this.state.albums.length);
    if (clicked.length === this.state.albums.length) {
      alert("You've won the memory game!");
      return window.location.reload();
    }
    
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    }

    // set temporary var for manipulation 
    let temp = this.state.albums;
    
    // shuffle
    temp = shuffle(temp);

    // setState
    this.setState({ 
      clicked: clicked,
      albums: temp,
      score: tScore
    });

  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Fragment>

      <Title>Kan-Ye Remember What Ye've Clicked?</Title>
      <Wrapper>
        {this.state.albums.map(album => (

          <GameCard
            checkClicked={this.checkClicked}
            id={album.id}
            key={album.id}
            name={album.name}
            image={album.image}
          />

        ))}
      </Wrapper>
      </Fragment>
    );
  }
}

export default App;
