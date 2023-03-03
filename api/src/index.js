const express = require('express');
const bodyParser = require('body-parser');

const indexUrlRouter = require('./routes/index');
const newUrlRouter = require('./routes/new');
const showUrlRouter = require('./routes/show');
const deleteUrlRouter = require('./routes/delete');

const session = require('express-session');
const store = new session.MemoryStore();

const { connectDb } = require('./helpers/db');
const { port, db } = require('./configuration');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// settings which will save it as a cookie as well
app.use(session({
    secret: 'my-super-secret-key',
    cookie: {
        maxAge: 100000  // 10 sec
    },
    // saveUninitialized: false, // will save it if session was modified only
    saveUninitialized: true, // will save it
    store
}));

// CORS
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
    });
};

app.get('/test', (req, res) => {
    res.send('Our B_Bitly server is working');
});

app.use('/', indexUrlRouter);
app.use('/', newUrlRouter);
app.use('/', showUrlRouter);
app.use('/', deleteUrlRouter);

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer);