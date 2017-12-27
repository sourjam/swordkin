require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.set('port', process.env.port || 5000);

app.use(express.static(path.join(__dirname, './client/dist')))
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'))
})

app.listen(app.get('port'), () => {
  console.log('running on ', app.get('port'))
})
