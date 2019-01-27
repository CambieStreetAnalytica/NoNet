const express = require('express');
const app = express();
const port = process.env.PORT || 1337;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.get('/', (req, res) => res.send('Application Base'));
app.get('/rest/helloWorld', (req, res) => {
    res.send("hello back!!!");
});

const MessagingResponse = require('twilio').twiml.MessagingResponse;

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();

    twiml.message('The Robots are coming! Head for the hills!');

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

// returns promise of {title, desc, link}
function searchGoogle(query) {
    return new Promise(function(res, rej) {
        resolve({});
    });
}

// returns promise of {title, desc, link}
function searchYelp(query) {
    return new Promise(function(res, rej) {
        resolve({});
    });
}

// returns promise of {title, desc, link}
function searchWikedpia(query) {
    return new Promise(function(res, rej) {
        resolve({});
    });
}