today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
currentDate = today.getDate();
const monthText = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
];

function greetingTime(){
  let hours = today.getHours();
  if (hours < 12){
    document.querySelector("#time_of_day").innerHTML += "morning";
  }
  else if (hours > 12 && hours < 17){
    document.querySelector("#time_of_day").innerHTML += "afternoon";
  }
  else{
    document.querySelector("#time_of_day").innerHTML += "evening";
  }
  /*hours = hours % 12 || 12;
  const i = today.getMinutes();
  minutes = i < 10 ? "0"+i : i;
  document.querySelector(".clock").innerHTML = hours + ":" + minutes;*/
}

greetingTime();


function dateDisplay(){
  document.querySelector(".date").innerHTML = monthText[currentMonth] + " " + currentDate + ", " + currentYear;
}

dateDisplay();