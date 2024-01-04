const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
console.log(fs.createWriteStream)
const port = 3000

// 设置静态目录
app.use(express.static(path.join(__dirname, '')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`)
})