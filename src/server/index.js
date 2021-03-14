const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 8080

const testFolder = path.join(__dirname, '..', '..', 'build', 'images');

// // body parsing middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '..', '..', 'build')));

app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.get('/pics', function (req, res) {
  fs.readdir(testFolder, (err, files) => {
    const gallery = files.filter((file) => file.includes('VStarYoga'));
    gallery.unshift(testFolder)
    console.log({gallery})
    res.send(gallery)
  });
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '..','..', 'build', 'index.html'));
});


app.listen(PORT, console.log(`Listening on ${PORT}`));
