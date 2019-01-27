const genericHelp = `These are the possible commands available \n
Web - Search Google\n
Yelp - Search Yelp\n
Wiki - Search Wikipedia\n
Url - get Website text\n
Tr - get translation\n
commands are not case sensitive \n
for more information, please type 'help: COMMAND'`;

const webHelp = "WEB AMOUNT(optional): QUERY - gets top AMOUNT results of QUERY from Google, AMOUNT has a maximum of 10 and a default of 5";

const yelpHelp = "Yelp AMOUNT(optional): QUERY - gets top AMOUNT results of QUERY from Yelp, AMOUNT has a maximum of 10 and a default of 5";

const wikiHelp = "Wiki AMOUNT(optional): QUERY - gets top AMOUNT results of QUERY from Wikipedia, AMOUNT has a maximum of 10 and a default of 5";

const urlHelp = "Url: URL - Returns important text from URL (article body, etc), do not include https:// or https:// in URL";

const trHelp = "Tr LANG: TEXT_TO_TRANSLATE - Translates TEXT_TO_TRANSLATE in to LANG - supported LANG values: en, es, fr, de, ru";

const notFound = "This command is not recognized";

function searchHelp(query) {
    return new Promise(function (res, req) {
        if (query === undefined || query === null) {
            res(genericHelp);
        } else {
            if (query === "web") {
                 res(webHelp);
            } else if (query === "yelp") {
                res(yelpHelp);
            } else if (query === "wiki") {
                res(wikiHelp);
            } else if (query === "url") {
                res(urlHelp);
            } else if (query === "tr") {
                res(trHelp);
            } else {
                res(notFound);
            }
        }
    });
}

searchHelp(undefined).then(console.log);