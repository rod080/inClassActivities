var axios = require("axios");
var fs = require("fs");

var TV = function() {
  this.findShow = function(show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    axios.get(URL).then(function(response) {
      var data = response.data;
      /*
       * The name of the show
       * The show's genre(s)
       * The show's average rating
       * The show's network name
       * The show's summary
       */
      console.log("Name : " + data.name);
      console.log("Name : " + data.genres);
      console.log("Name : " + data.rating.average);
      console.log("Name : " + data.network.name);
      console.log("Name : " + data.summary);

      var log = "name : " + data.name + "\n" + "genres : " + data.genres + "\n";

      fs.appendFile("log.txt", log, function(err) {
        if(err) {
          return console.log(err);
        }
        console.log("wrote to log file");
      })

    });
  };
};

module.exports = TV;
