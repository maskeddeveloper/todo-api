const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.listen(process.env.PORT, () => {
  console.log('server is running')
})
