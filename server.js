const express = require('express')
const app = express()

app.use(require('./routes'))

require('./config')
    .then(() => app.listen(27017))
    .catch(err => console.error(err))