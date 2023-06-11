const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());

const songs = require('./db.js')

app.get('/songs', (req, res) => {
    const search = req.query.search;    
    if(search){
        const search = req.query.search;
        let data = songs
            .filter(song => song.name.toLowerCase().includes(search.toLowerCase()))
            .map(song => ({id: song.id, name: song.name, lyrics: song.lyrics, artist: song.artist}));
        res.json(data);        
    }else{
        let data = songs.map(song => ({id: song.id, name: song.name, lyrics: song.lyrics, artist: song.artist}));
        res.json(data);
    }
});

app.get('/songs/:id', (req, res) => {
    const id = req.params.id;
    const song = songs.find(song => song.id == id);
    if (!song) {
        res.status(404).send({message: 'Song not found'});
    } else {
        res.json({id: song.id, name: song.name, lyrics: song.lyrics});
    }
});

app.get('/songs/stream/:id', (req, res) => {
    const id = req.params.id;
    const song = songs.find(song => song.id == id);
    if (!song) {
        res.status(404).send({message: 'Song not found'});
    } else {
        const stat = fs.statSync(song.file);
        const fileSize = stat.size;
        const range = req.headers.range;
        console.log(range);
        if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] 
            ? parseInt(parts[1], 10)
            : fileSize-1;
        
        const chunksize = (end-start)+1;
        const file = fs.createReadStream(song.file, {start, end});
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'audio/mpeg',
        }
        res.writeHead(206, head);
        file.pipe(res);
        } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'audio/mpeg',
        }
        res.writeHead(200, head);
        fs.createReadStream(song.file).pipe(res);
        }
    }
});

const port = process.env.PORT || 3005;
app.listen(port, () => console.log(`Listening on port ${port}`));
