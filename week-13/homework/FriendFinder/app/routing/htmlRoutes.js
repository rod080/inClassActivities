

var path = require("path");
// app.get("/survey", function(req, res) {
//     res.sendFile(path.join("app/public/survey.html"));
//   });

//   app.get("/", function(req, res) {
//     res.sendFile(path.join("app/public/home.html"));
//   });

  module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });
    
      app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
  };
  


  // app.listen(PORT, function() {
  //   console.log("App listening on PORT " + PORT);
  // });
  

  