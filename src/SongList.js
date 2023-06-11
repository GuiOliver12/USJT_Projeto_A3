import React, { useEffect, useState } from 'react';

function SongList() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3005/songs')
      .then(response => response.json())
      .then(data => {
        setSongs(data);
        console.log(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Omusical</h1>
      {songs.map(song => (
        <div key={song.id} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px', padding: '10px', border: '1px solid #ddd'}}>
          <div style={{flex: 1}}>
            <h2 style={{fontSize: '1.5em'}}>{song.name}</h2>
            <p style={{fontSize: '0.9em', color: '#777'}}>{song.artist}</p>
            <p style={{marginTop: '10px', wordWrap: 'break-word', whiteSpace: 'pre-wrap'}}>{song.lyrics}</p>
          </div>
          <audio controls src={`http://localhost:3005/songs/stream/${song.id}`} />
        </div>
      ))}
    </div>
  );
}

export default SongList;
