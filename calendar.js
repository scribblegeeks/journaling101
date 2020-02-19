//
//
//  INIT 
//
//
today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
currentDate = today.getDate();
var monthText = [
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

showCalendar(currentMonth, currentYear);
sidebarDate();

//
//
//  BUTTTONS ON PRESS
//
//


//var todayBtn = $(".c-today__btn");
document.querySelector(".c-today__btn").onclick = goToday;
function goToday() {
  currentMonth = today.getMonth();
  currentYear = today.getFullYear();
  showCalendar(currentMonth, currentYear);
};

document.querySelector("#next").onclick = nextMonth;
function nextMonth() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

document.querySelector("#prev").onclick = previousMonth;
function previousMonth() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

//
//
//  FUNCTIONS TO RUN THE CALENDAR
//
//

function showCalendar(month, year) {
  let firstDay = (new Date(year, month)).getDay();

  let Disp_Month = document.querySelector("#c-paginator");
  Disp_Month.classList.add("c-cal__row");
  Disp_Month.innerHTML = monthText[month];

  document.querySelector(".c-paginator__year").innerHTML = year;

  let OverAll = document.querySelector(".c-main");
  OverAll.innerHTML = "";

  let row = document.createElement("div");
  row.classList.add("c-cal__row");
  for (day of ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]){
    row.innerHTML += "<div class='c-cal__col'>" + day + "</div>";
  }
  OverAll.appendChild(row);

  let date = 1;
  for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("div");
        row.classList.add("c-cal__row");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
          if (i == 0 && j < firstDay) {
            row.innerHTML += "<div class='c-cal__empty'></div>";
          }
          else if (date > daysInMonth(month, year)) {
            break;
          } else {
            cell = document.createElement("div");
            cell.classList.add("c-cal__cel");
            cell.innerHTML = "<p>" + date + "</p>";
          
          if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()){
            cell.classList.add("is_today");
          }
          row.appendChild(cell);
          date++;
          }
        }
        OverAll.appendChild(row);
        update_dataCel();
      }
    }

// check how many days in a month code from https://dzone.com/articles/determining-number-days-month
function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}
