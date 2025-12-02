const express = require('express')
const app = express()
const port = 3000
const path = require('path');

// const csv = require('csv-parser')
// const fs = require('fs')
// const results = [];

// fs.createReadStream('/Documents/Development/myapp/data/cape_may_restaurants.csv')
//     .pipe(csv())
//     .on('data', (data) => results.push(data))
//     .on('end', () => {
//         console.log(results);
//     });

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
