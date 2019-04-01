import React, { Component } from "react";
import Compendium from "./components/Compendium/Compendium";
import Header from "./components/Header/Header";
import UserFavorites from "./components/UserFavorites/UserFavorites";
import WantToPlay from "./components/WantToPlay/WantToPlay";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(game) {
    super();
    this.state = {
      Compendium: [],
      Favorites: [],
      WantToPlay: [],
      Header:[],
      
    };
  }

  componentDidMount() {
    this.getAllGame();
  }

  getAllGame = () => {
    axios.get("/api/game").then(response => {
      // console.log(response.data.results);
      this.setState({
        Compendium: response.data.results
      });
    });
  };
  addToFavorites = game => {
    let newGame = {
      title: game.title,
      average_rating: game.average_rating,
      cover_art: game.cover_art,
      Developer: game.Developer,
      ESRB_Rating: game.ESRB_Rating,
      Synopsis: game.Synopsis,
      Category: game.Category,
      release_date: game.release_date
    };
    // console.log(newGame);
    axios.post("/api/game", newGame).then(response => {
      this.setState({
        Favorites: response.data
      });
    });
  };
  WantToPlay = game => {
    let addGame = {
      title: game.title,
      cover_art: game.cover_art
    };
    axios.post("/api/game", addGame).then(response => {
      this.setState({
        WantToPlay: response.data
      });
    });
  };
  updateGame = (game, action) => {
    console.log(game);
    axios.put(`/api/game/${game.id}?liked=${action}`).then(res => {
      this.setState({
        Compendium: res.data
      });
      console.log(this.state.Compendium);
    });
  };
  gameDelete = (game, action) => {
    axios.delete(`/api/game/${game.id}?delete=${action}`).then(res => {
      this.setState({
        Favorites: res.data,
        WantToPlay:res.data
      });
    });
  };
  // gameDeletes = (game, action) => {
  //   axios.delete(`/api/game/${game.id}?delete=${action}`).then(res => {
  //     this.setState({
  //       WantToPlay:res.data
  //     });
  //   });
  // };
  render() {
    // console.log(this.state.Favorites);
    return (
      <div className="App">
        <Header Header={this.state.Header}/>
        <UserFavorites Favorites={this.state.Favorites} 
        gameDelete={this.gameDelete}
        />
        <Compendium
          addToFavorites={this.addToFavorites}
          Compendium={this.state.Compendium}
          update={this.updateGame}
          addWantToPlay={this.WantToPlay}
        />
        <WantToPlay WantToPlay={this.state.WantToPlay} 
        gameDelete={this.gameDelete}/>
        
      </div>
    );
  }
}

export default App;
