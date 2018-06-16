var cheerio = require("cheerio");
var request = require("request");

request("https://www.espn.com", function(error, response, html) {
  var $ = cheerio.load(html);
 
  var results = [];
  $("h1.contentItem_title").each(function(i, element) {
    var title = $(element).text();
    var link = $(element).children().attr("href");
   
    results.push({
      title: title,
      link: link
    });
  });

  
  console.log(results);
});