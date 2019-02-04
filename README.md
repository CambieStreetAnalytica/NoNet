# NoNet

## Purpose
NoNet was built for NWHacks 2019 and received the <b>Wolfram Award</b>

## What it does
NoNet gives unfettered access to internets most popular service without an internet or data connection. It accomplishes this through sending SMS queries to a server which then processes the query and returns results that were previously only accessible to those with an uncensored internet connection. It works with Yelp, Google Search (headlines), Google Search (Articles/Websites), Wikipedia, and Google Translate. 

some commands include:
 - 'web: border wall' // returns top results from google
 - 'url: www.somesite.somearticle.com' // returns article content
 - 'tr ru: Hello my russian friend!' // returns russian translation
 - 'wiki: Berlin' // returns Wikipedia for Berlin
 - 'cmd' // returns all commands available

The use cases are many: 
- in many countries, everyone has a phone with sms, but data is prohibitively expensive so they have no internet access
- Countries like China have a censored internet, and this would give citizens the freedom to bybass that 
- Authoritarian Countries turn of internet in times of mass unrest to keep disinformation

## Technology Used
We integrated Twilio for SMS with a NodeJS server, hosted on Google App Engine, and using multiple API's

## Examples
![translate example](https://raw.githubusercontent.com/CambieStreetAnalytica/NoNet/master/imgs/translationExample.png)
![translate example](https://raw.githubusercontent.com/CambieStreetAnalytica/NoNet/master/imgs/webExample.png)
![translate example](https://raw.githubusercontent.com/CambieStreetAnalytica/NoNet/master/imgs/articleExample.png)
![translate example](https://raw.githubusercontent.com/CambieStreetAnalytica/NoNet/master/imgs/wikiExample.png)
![translate example](https://raw.githubusercontent.com/CambieStreetAnalytica/NoNet/master/imgs/yelpExample.png)


## Read More
you can read more about NoNet at https://devpost.com/software/nonet/
