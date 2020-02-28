today = new Date();

function greetingTime(){
  let hours = today.getHours();
  if (hours < 12){
    document.querySelector("#time_of_day").innerHTML += "Morning";
  }
  else if (hours > 12 && hours < 17){
    document.querySelector("#time_of_day").innerHTML += "Afternoon";
  }
  else{
    document.querySelector("#time_of_day").innerHTML += "Evening";
  }
  hours = hours % 12 || 12;
  const i = today.getMinutes();
  minutes = i < 10 ? "0"+i : i;
  document.querySelector(".clock").innerHTML = hours + ":" + minutes;
}

greetingTime();
