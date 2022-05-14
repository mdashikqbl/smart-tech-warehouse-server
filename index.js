const express = require('express');
const cors = require('cors');
const { get } = require('express/lib/response');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000


//middlewere
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('werehouse server running')
})

app.listen(port, () => {
    console.log('listen to port', port);
})