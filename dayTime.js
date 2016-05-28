//script to get the current day and the current time

//date object
var d = new Date();

//get current day
function currentDay() {
  //number day
  var day = d.getDay();
  var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  console.log(day);
  return dayList[day]
}

//get current hour
function currentHour() {
  //current hour variable
  var hour = d.getHours();
  //index of pm hours to convert back to non military time
  var pmHour = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  //figuring out if it is am or pm
  if (hour <= 12) {
    return hour + " AM";
  //converts military back to civilian time
  } else {
    return pmHour.indexOf(hour) + 1 + " PM";
  }
}


console.log("Today is : " + currentDay() + ".");
console.log("Current time is : " + currentHour() + " : " + d.getMinutes() + " : " + d.getSeconds());
