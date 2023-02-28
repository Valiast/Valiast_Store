const path = require('node:path');
const express = require('express');
const app = express();

const appsettings = require('./private/settings/appsettings.json');
const port = appsettings.port;

app.listen(port, () => {
    console.log('listening on port ' + port);
});

app.use(express.static(path.join(__dirname, appsettings.static)))


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/public/pages/index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/public/pages/login.html'));
});

app.get('/reg', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/public/pages/reg.html'));
});