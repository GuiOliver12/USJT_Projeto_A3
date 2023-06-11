import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function ItemMusic() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/songs")
      .then((response) => response.json())
      .then((data) => {
        setSongs(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  return songs.map((song) => {
    return (
      <a href={`/picked-music/${song.id}`} key={song.id}>
        <div className="item-music-component">
            <p>{song.name}</p>
        </div>
      </a>
    );
  });
}

export default ItemMusic;
