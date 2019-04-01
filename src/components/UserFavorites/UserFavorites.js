import React from "react";
import "./UserFavorites.css";
const coverArtPath = "";

export default function UserFavorites(props) {
  let mappedFavorites = props.Favorites.map(game => {
    return (
      <div key={game.id}>
        <img src={coverArtPath + game.cover_art} alt="" />
        <h1>{game.title}</h1>
        <button onDoubleClickCapture={() => props.gameDelete(game)}>x</button>

        {/* <button
              style={{ backgroundColor: game["Liked"] ? "Blue" : "white" }}
              onClick={() => props.update(game, true)}
            ></button> */}
      </div>
    );
  });
  return <div className="Favorites-container">{mappedFavorites}</div>;
}
