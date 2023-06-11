import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";

function PickedMusic() {
  const { musicId } = useParams();
  const [song, setSong] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://localhost:3005/songs/${musicId}`)
      .then((response) => response.json())
      .then((data) => {
        setSong(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <div className="green-board-header">
        <a href={`/pick-list`} className="list-path-letter">
          <p className="title-omusical-hover">Omusical</p>
        </a>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "10px",
          padding: "10px",
          border: "1px solid #ddd",
        }}
      >
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "1.5em" }}>{song.name}</h2>
          <p style={{ fontSize: "0.9em", color: "#777" }}>{song.artist}</p>
          <p
            style={{
              marginTop: "10px",
              wordWrap: "break-word",
              whiteSpace: "pre-wrap",
            }}
          >
            {song.lyrics}
          </p>
        </div>
        <audio controls src={`http://localhost:3005/songs/stream/${song.id}`} />
      </div>
    </>
  );
}

export default PickedMusic;
