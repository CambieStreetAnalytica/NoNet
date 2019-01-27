const express = require("express");
const request = require("request-promise");

const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 1337;
const validTypes = ["goog", "yelp", "wiki"];

const yelp_key = "002412142127618762442:e7hmnqop_ai";
const wiki_key = "002412142127618762442:q3eq1hoh6wu";
const goog_key = "016717304083729390418:3pmwddke6q4";
const api_key = "AIzaSyCeb1PbN_a3Bth_f6VR9krKRjKuc1KPcjw";

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
app.get("/", (req, res) => {
  res.send("Application Base");
});

const MessagingResponse = require("twilio").twiml.MessagingResponse;

// search("burger", 6, yelp_key, parseResponseYelp).then(function(val) {
//   console.log(val);
// });

app.post("/sms", (req, res) => {
  const twiml = new MessagingResponse();
  const incomingMessage = req.body.Body.toLowerCase();
  const searchQuery = parseMessage(incomingMessage);
  if (searchQuery === null) {
    twiml.message(
      "Invalid Search Query, please make query of form 'type limit search'"
    );
    sendMessage(res, twiml, 200);
  } else {
    makeQuery(searchQuery.type, searchQuery.amount, searchQuery.query).then(
      function(value) {
        twiml.message(value);
        sendMessage(res, twiml, 200);
      }
    );
  }
});

function makeQuery(type, amount, query) {
  if (type === "goog") {
    return search(query, amount, goog_key, parseResponseGoog);
  } else if (type === "wiki") {
    return search(query, amount, wiki_key, parseResponseWiki);
  } else if (type === "yelp") {
    return search(query, amount, yelp_key, parseResponseYelp);
  }
}

function sendMessage(res, twiml, status) {
  res.writeHead(status, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
}

function search(query, amount, key, parsing) {
  const url =
    "https://www.googleapis.com/customsearch/v1?key=" +
    api_key +
    "&cx=" +
    key +
    "&q=" +
    query;
  console.log(url);

  const options = {
    url: url,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Accept-Charset": "utf-8"
    }
  };

  return request(options).then(function(body) {
    let json = JSON.parse(body);
    response = parsing(json);
    return response;
  });
}

//parses the sent text message into {type, amount, query} -- returns null if msg is malformed
function parseMessage(msg) {
  // msg will look like 'wiki 10 germany' or 'yelp 5 chinese food'
  const sections = msg.split(" ");
  const type = sections[0];
  const amount = Number(sections[1]);
  const query = sections.splice(2).join(" ");

  const isValid =
    validTypes.includes(type) && !Number.isNaN(amount) && query !== undefined;
  return isValid
    ? {
        type: type,
        amount: amount,
        query: query
      }
    : null;
}

function parseResponseGoog(json) {
  return JSON.stringify(json.items[0].title);
}

function parseResponseYelp(json) {
  return JSON.stringify(json.items[0].title);
}

function parseResponseWiki(json) {
  return JSON.stringify(json.items[0].title);
}
