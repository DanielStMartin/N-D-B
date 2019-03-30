import React from "react";
import "./Compendium.css";
const coverArtPath = "";

export default function Compendium(props) {
  let mappedCompendium = props.Compendium.map(game => {
    return (
      <div key={game.id}>
        <img src={coverArtPath + game.cover_art} alt="" />
        <h1>{game.title}</h1>
        <span>{game.Synopsis}</span>
        <h1>{game.Category}</h1>
        <button onClick={() => props.add}>Poop</button>
        <button onClick={() => props.addToFavorites(game)}>
          Add to Favorites
        </button>
        <button onClick={() => props.add}>Like</button>
      </div>
    );
  });
  return <div className="This is Compendium of Game!">{mappedCompendium}</div>;
}
