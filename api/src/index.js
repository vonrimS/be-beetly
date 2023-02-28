const express = require('express');
const { connectDb } = require('./helpers/db');
const { port } = require('./configuration');
const app = express();

const startServer = () => {
    app.listen(port, () => {
        console.log(`[api] service started on port ${port}`);
    });
};

app.get('/test', (req, res) => {
    res.send('Our B-Bitly server is working');
});


connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer);