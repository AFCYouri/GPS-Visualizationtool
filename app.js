const express = require('express')
const app = express()
const port = 3000
// const path = require('path');

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, './'));
// });

const folderToServe = __dirname;
app.use(express.static(folderToServe));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// const http = require('http-server')

// const server = http.createServer({ root: './' });

// server.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// });