const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');
const port = 3000;

app.listen (port, () => { console.log(`Server is running on port ${port}`); });

app.get ('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));; });

app.download ('/style.css', (req, res) =>
    { res.sendFile(path.join(__dirname, 'style.css')); } );
