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
