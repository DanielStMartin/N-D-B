import React, { Component } from "react";
import Compendium from "./components/Compendium/Compendium";
import Disliked from "./components/Disliked/Disliked";
import Header from "./components/Header/Header";
import Liked from "./components/Liked/Liked";
import UserFavorites from "./components/UserFavorites/UserFavorites";
import WantToPlay from "./components/WantToPlay/WantToPlay";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Compendium: [],
      Favorites: []
    };
  }

  componentDidMount() {
    this.getAllGame();
  }

  getAllGame = () => {
    axios.get("/api/game").then(response => {
      console.log(response.data.results);
      this.setState({
        Compendium: response.data.results
      });
    });
  };
  addToFavorites = game => {
    const newGame = {
      title: game.title,
      average_rating: game.average_rating,
      cover_art: game.cover_art,
      Developer: game.Developer,
      ESRB_Rating: game.ESRB_Rating,
      Synopsis: game.Synopsis,
      Category: game.Category,
      release_date: game.release_date
    };
    console.log(newGame);
    axios.post("/api/game", newGame).then(response => {
      this.setState({
        Favorites: response.data
      });
    });
  };

  render() {
    console.log(this.state.Favorites);
    return (
      <div className="App">
        <Header />
        <Compendium
          addToFavorites={this.addToFavorites}
          Compendium={this.state.Compendium}
        />
        <Disliked />
        <Liked />
        <UserFavorites Favorites={this.state.Favorites} />
        <WantToPlay />
      </div>
    );
  }
}

export default App;
