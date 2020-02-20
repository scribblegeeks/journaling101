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
goToday();
make_Entry(14, "busy day, saw a movie, hung out with Ted, not much time to write");

//
//
//  BUTTTONS ON PRESS
//
//


//var todayBtn = $(".c-today__btn");
document.querySelector(".c-today__btn").onclick = goToday;
function goToday() {
  if (currentMonth != today.getMonth()) {
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
    showCalendar(currentMonth, currentYear);
  }

  currentDate = today.getDate();
  dataCel.each(function(){
    if ($(this).children()[0].innerText == currentDate) {
      selectDay($(this));
    }
  });
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

function selectDay(self) {
  currentDate = self.children()[0].innerText;
  fillEventSidebar(self.attr("data-notes"));

  dataCel.removeClass("isSelected");
  self.addClass("isSelected");
}

var editBtn = $(".js-event__add");
var saveBtn = $(".js-event__save");
var closeBtn = $(".js-event__close");
var winCreator = $(".js-event__creator");
var e = {}; // object of entries

//
//
//  BUTTTONS ON PRESS
//
//

//open edit window
editBtn.on("click", function() {
  // maybe use =?:; syntax here?
  if ( $(".isSelected").attr("data-notes") == undefined ) {
    document.querySelector("textarea").innerHTML = "";
  }else{
    document.querySelector("textarea").innerHTML = $(".isSelected").attr("data-notes");
  }
  winCreator.addClass("isVisible");
  $("body").addClass("overlay");
});

//close edit window
closeBtn.on("click", function() {
  closeEdit();
});

//save entry and close
saveBtn.on("click", function() {
  var inputDate = currentDate;
  var inputNotes = $("textarea[name=notes]").val();

  make_Entry(inputDate, inputNotes)
  fillEventSidebar(inputNotes);

  closeEdit();
});

//
//
//  FUNCTIONS TO RUN ENTRIES
//
//

function fillEventSidebar(NOTE) {
  $(".c-aside__num").text(currentDate);
  $(".c-aside__month").text(monthText[currentMonth]);
  $(".c-aside__event").remove();
  //var thisNotes = NOTE;//self.attr("data-notes");

  if (NOTE != null) {
    $(".c-aside__eventList").append(
      "<p class='c-aside__event'>" +
      NOTE +
      "</span></p>"
      );
  }
}

function update_dataCel() {
  dataCel = $(".c-cal__cel");
  dataCel.on("click", function() {
    selectDay($(this));
  });
}

//handles closing edit window
function closeEdit() {
  winCreator.removeClass("isVisible");
  $("body").removeClass("overlay");
  $("#edit")[0].reset();
}

function make_Entry(make_date, journal_entry){
  dataCel.each(function() {
    if ($(this).children()[0].innerText == make_date) {
      if (journal_entry != null) {
        $(this).attr("data-notes", journal_entry);
      }
      $(this).addClass("event"); // needed to make the dot
    }
  });
} 
