const express = require('express')
const app = express()
const port = 3000


//set static forder public
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})