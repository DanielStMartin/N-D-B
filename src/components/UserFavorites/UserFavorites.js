import React from "react";
import "./UserFavorites.css";
const coverArtPath = "";

export default function UserFavorites(props) {
  let mappedFavorites = props.Favorites.map(game => {
    return (
      <div key={game.id}>
        <img src={coverArtPath + game.cover_art} alt="" />
        <h1>game.title</h1>
        <button onClick={() => props.addToFavorites(game)}>
          Add to Favorites
        </button>
        {/* <span>{game.Synopsis.substring(0, 150)}</span> */}
      </div>
    );
  });
  return <div className="Favorites-container ">{mappedFavorites}</div>;
}
