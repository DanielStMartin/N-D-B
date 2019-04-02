import React from "react";
import "./Compendium.css";
const coverArtPath = "";

export default function Compendium(props) {
  let mappedCompendium = props.Compendium.map(game => {
    return (
      <header key={game.id}>
        <div key={game.id}>
          <img src={coverArtPath + game.cover_art} alt="" />
          <h1>{game.title}</h1>
          <span>{game.Synopsis}</span>
          <h3>{game.Category}</h3>
          <button
            className="Like"
            style={{ backgroundColor: game["Liked"] ? "Red" : "white" }}
            onClick={() => props.update(game, true)}
          >
            Like
          </button>
          &nbsp;
          <button
            className="Dislike"
            style={{ backgroundColor: game["Disliked"] ? "blue" : "white" }}
            onClick={() => props.update(game, false)}
          >
            Disliked
          </button>
          &nbsp;
          <button className="Favs" onClick={() => props.addToFavorites(game)}>
            Favorites
          </button>
          &nbsp;
          <button onClick={() => props.addWantToPlay(game)}>
            Want to Play
          </button>
          <div>
            {/* <input placeholder="Search Game" />
            <button>Submit</button> */}
          </div>
        </div>
      </header>
    );
  });
  return <div className="Compendium">{mappedCompendium}</div>;
}
