import React from "react";
import "./WantToPlay.css";
const coverArtPath = "";

export default function WantToPlay(props) {
  let mappedWantToPlay = props.WantToPlay.map(game => {
    return (
      <div key={game.id}>
        <img src={coverArtPath + game.cover_art} alt="" />
        <h1>{game.title}</h1>
        <button onClick={() => props.gameDelete(game)}>o</button>
      </div>
    );
  });
  return <div className="Want-To-Play">{mappedWantToPlay}</div>;
}