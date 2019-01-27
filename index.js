const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 1337;
const validTypes = ['goog', 'yelp', 'wiki'];

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
app.get('/', (req, res) => {
    res.send('Application Base');
});

const MessagingResponse = require('twilio').twiml.MessagingResponse;

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
    const incomingMessage = req.body.Body;
    const searchQuery = parseMessage(incomingMessage);
    if (searchQuery === null) {
        twiml.message("Invalid Search Query, please make query of form 'type limit search'");
        sendMessage(res, twiml, 200);
    } else {
        makeQuery(searchQuery.type, searchQuery.amount, searchQuery.query).then(function(value){
            twiml.message(value);
            sendMessage(res, twiml, 200);
        });

    }
});

function makeQuery(type, amount, query) {
    if (type === "goog") {
        return searchGoogle(query, amount);
    } else if (type === "wiki") {
        return searchWikedpia(query, amount);
    } else if (type === "yelp") {
        return searchYelp(query, amount);
    }
}

function sendMessage(res, twiml, status) {
    res.writeHead(status, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
}

// returns promise of String
function searchGoogle(query, amount) {
    return new Promise(function(res, rej) {
        resolve("");
    });
}

// returns promise of String
function searchYelp(query) {
    return new Promise(function(res, rej) {
        resolve("");
    });
}

// returns promise of String
function searchWikedpia(query, amount) {
    return new Promise(function(res, rej) {
        resolve("");
    });
}

//parses the sent text message into {type, amount, query} -- returns null if msg is malformed
function parseMessage(msg) {
    // msg will look like 'wiki 10 germany' or 'yelp 5 chinese food'
    const sections = msg.split(" ");
    const type = sections[0];
    const amount = Number(sections[1]);
    const query = sections.splice(2).join(" ");

    const isValid = validTypes.includes(type) && !Number.isNaN(amount) && query !== undefined;
    return isValid ? {
        type: type,
        amount: amount,
        query: query
    } : null;
}

