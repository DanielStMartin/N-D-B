import React, { Component } from "react";
import Compendium from "./components/Compendium/Compendium";
import Header from "./components/Header/Header";
import UserFavorites from "./components/UserFavorites/UserFavorites";
import WantToPlay from "./components/WantToPlay/WantToPlay";
import Footer from "./components/Footer/Footer";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(game) {
    super();
    this.state = {
      Compendium: [],
      Favorites: [],
      WantToPlay: [],
      Header: [],
      toggleNav: false
    };
  }

  componentDidMount() {
    this.getAllGame();
    this.getFavGame();
    this.getLaterGame();
  }

  getAllGame = () => {
    axios.get("/api/game").then(response => {
      this.setState({
        Compendium: response.data.results
      });
    });
  };
  getLaterGame = () => {
    axios.get("/api/latergame").then(response => {
      this.setState({
        WantToPlay: response.data
      });
    });
  };
  getFavGame = () => {
    axios.get("/api/favgame").then(response => {
      this.setState({
        Favorites: response.data
      });
    });
  };
  addToFavorites = game => {
    let favGame = {
      title: game.title,
      average_rating: game.average_rating,
      cover_art: game.cover_art,
      Developer: game.Developer,
      ESRB_Rating: game.ESRB_Rating,
      Synopsis: game.Synopsis,
      Category: game.Category,
      release_date: game.release_date
    };
    axios.post("/api/favgame", favGame).then(response => {
      this.setState({
        Favorites: response.data
      });
    });
  };
  WantToPlay = game => {
    let laterGame = {
      title: game.title,
      average_rating: game.average_rating,
      cover_art: game.cover_art,
      Developer: game.Developer,
      ESRB_Rating: game.ESRB_Rating,
      Synopsis: game.Synopsis,
      Category: game.Category,
      release_date: game.release_date
    };
    axios.post("/api/latergame", laterGame).then(response => {
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
  favDelete = (game, action) => {
    axios.delete(`/api/favgame/${game.id}`).then(res => {
      this.setState({
        Favorites: res.data
        // WantToPlay: res.data
      });
    });
  };
  laterDelete = (game, action) => {
    axios.delete(`/api/latergame/${game.id}`).then(res => {
      this.setState({
        // Favorites: res.data,
        WantToPlay: res.data
      });
    });
  };

  scrollPage = (xx, yy, scrollTo) => {
    scrollTo({ x: xx, y: yy,  });
    this.setState({ toggleNav: false });
  };

  render() {
    return (
      <div className="App">
        <Header Header={this.state.Header} scrollPage={this.scrollPage} />
        <UserFavorites
          Favorites={this.state.Favorites}
          favDelete={this.favDelete}
        />
        <Compendium
          addToFavorites={this.addToFavorites}
          Compendium={this.state.Compendium}
          update={this.updateGame}
          addWantToPlay={this.WantToPlay}
        />
        <WantToPlay
          WantToPlay={this.state.WantToPlay}
          laterDelete={this.laterDelete}
        />
        <Footer Footer={this.state.Footer} scrollPage={this.scrollPage} />
      </div>
    );
  }
}

export default App;
