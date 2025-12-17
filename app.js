const express = require('express')
const app = express()
const port = 3000

const folderToServe = __dirname;
app.use(express.static(folderToServe));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})