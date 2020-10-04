const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('Frontend'))

app.listen(4444)