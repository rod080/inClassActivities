// Initialize Firebase (YOUR OWN APP)
// Make sure that your configuration matches your firebase script version
// (Ex. 3.0 != 3.7.1)
var firebaseConfig = {
  apiKey: "AIzaSyDwStjvpsF69lLPYa_17RbSb6CY4Hr-5fw",
  authDomain: "in-class-trilogy-activities.firebaseapp.com",
  databaseURL: "https://in-class-trilogy-activities.firebaseio.com",
  projectId: "in-class-trilogy-activities",
  storageBucket: "in-class-trilogy-activities.appspot.com",
  messagingSenderId: "446247476832",
  appId: "1:446247476832:web:b29808edddb486f2"
};
firebase.initializeApp(firebaseConfig);

// Create a variable to reference the database
var database = firebase.database();


// Use the below initialValue
var initialValue = 10;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;
var reachedZeroCounter = 0;
var resetCounter = 0;

// --------------------------------------------------------------

// At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)
// This callback keeps the page updated when a value changes in firebase.
// HINT: Assuming 'database' is our database variable, use...
// database.ref().on("value", function(snapshot)) {}
database.ref().on("value", function(snapshot) {
  // We are now inside our .on function...

  // Console.log the "snapshot" value (a point-in-time representation of the database)
  console.log(snapshot.val())
  // This "snapshot" allows the page to get the most current values in firebase.
  // Change the value of our clickCounter to match the value in the database
  clickCounter = snapshot.val().clickCount;

  if(snapshot.val().reachedZeroCount == undefined) {
    reachedZeroCounter = 0;
  } else {
    reachedZeroCounter = snapshot.val().reachedZeroCount;
  }
  
  if(snapshot.val().resetCount == undefined) {
    resetCounter = 0;
  } else {
    resetCounter = snapshot.val().resetCount
  }
  
  console.log(reachedZeroCounter);
  console.log(resetCounter);

  // Change the HTML using jQuery to reflect the updated clickCounter value
  $("#click-value").text(clickCounter);

}, function(onerror) {
  console.log("omg something happened!");
});

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  if (clickCounter === 0) {

    alert("Phew! You made it! That sure was a lot of clicking.");

    clickCounter = initialValue;
    reachedZeroCounter++;

  }

  // Save new value to Firebase
  database.ref().set({
    clickCount: clickCounter,
    reachedZeroCount: reachedZeroCounter,
    resetCount: resetCounter
  });

  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {
  resetCounter++;
  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase
  database.ref().set({
    clickCount : clickCounter,
    reachedZeroCount: reachedZeroCounter,
    resetCount: resetCounter
  });

  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").text(clickCounter);


});
