const express = require('express');
// const http = require('http');
const bodyParser = require('body-parser');

const indexUrlRouter = require('./routes/index');
const newUrlRouter = require('./routes/new');
const showUrlRouter = require('./routes/show');
const deleteUrlRouter = require('./routes/delete');


const { connectDb } = require('./helpers/db');
const { port, db } = require('./configuration');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

const startServer = () => {
    app.listen(port, async () => {
        console.log(`[api] service started on port ${port}`);
        console.log(`...our database: ${db}`);

        // const urls = await Url.find({});
        // console.log(urls);

        // const test = new Url({ url: "one-two-three", shortUrl: "one-2-3" });
        // await test.save();

        // console.log(test);
    });
};

app.get('/test', (req, res) => {
    res.send('Our B_Bitly server is working');
});

// app.get('/shortOne', (req, res) => {
//     res.redirect(301, 'https://www.applesfromny.com/varieties/snapdragon/');
// });

app.use('/', indexUrlRouter);
app.use('/', newUrlRouter);
app.use('/', showUrlRouter);
app.use('/', deleteUrlRouter);


connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer);