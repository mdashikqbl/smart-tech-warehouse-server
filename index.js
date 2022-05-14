const express = require('express');
const cors = require('cors');
const { get } = require('express/lib/response');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000


//middlewere
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.48kqi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {

    }
    finally {

    }

}

run().catch(console.dir)


app.get('/', (req, res) => {
    res.send('werehouse server running')
})

app.listen(port, () => {
    console.log('listen to port', port);
})