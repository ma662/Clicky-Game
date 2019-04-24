import React, { Component } from "react";
// import FriendCard from "./components/FriendCard";

// components
import Wrapper from "./components/Wrapper";
import GameCard from "./components/GameCard";
import Title from "./components/Title";

// data
// import friends from "./friends.json";
import albums from "./albums.json";

var clicked = [];

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    // friends,
    clicked,
    albums
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  checkClicked = id => {
    // filter result of index 0 because always searching for one id and don't want too many nested arrays
    clicked.push(this.state.albums.filter(selection => selection.id === id)[0]);
    console.log(clicked);
    alert("click!");
    
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

    console.log(this.state.albums);
    // set temporary var for manipulation 
    let temp = this.state.albums;
    
    // shuffle
    temp = shuffle(temp);

    // setState
    this.setState({ 
      clicked: clicked,
      albums: temp
   });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
      <Title>Can You Remember What You've Clicked?</Title>
        {this.state.albums.map(album => (

          <GameCard
            checkClicked={this.checkClicked}
            id={album.id}
            key={album.id}
            name={album.name}
            image={album.image}
          />

        ))}

        {/* {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))} */}
      </Wrapper>
    );
  }
}

export default App;
