//
//
//  INIT 
//
//
let e = []; // object of entries
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

showCalendar(currentMonth, currentYear);
goToday();
make_Entry("14", "busy day, saw a movie, hung out with Ted, not much time to write");

//
//
//  BUTTTONS ON PRESS
//
//


//var todayBtn = $(".today__btn");
document.querySelector(".today__btn").onclick = goToday;
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

	let Disp_Month = document.querySelector("#paginator");
	Disp_Month.classList.add("cal__row");
	Disp_Month.innerHTML = monthText[month];

	document.querySelector(".paginator__year").innerHTML = year;

	let OverAll = document.querySelector(".main");
	OverAll.innerHTML = "";

	let row = document.createElement("div");
	row.classList.add("cal__row");
	for (day of ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]){
		row.innerHTML += "<div class='cal__col'>" + day + "</div>";
	}
	OverAll.appendChild(row);

	let date = 1;
	for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("div");
        row.classList.add("cal__row");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
        	if (i == 0 && j < firstDay) {
        		row.innerHTML += "<div class='cal__empty'></div>";
        	}
        	else if (date > daysInMonth(month, year)) {
        		break;
        	} else {
        		cell = document.createElement("div");
        		cell.classList.add("cal__cel");
        		cell.innerHTML = "<p>" + date + "</p>";

        		if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()){
        			cell.classList.add("is_today");
        		}
        		row.appendChild(cell);
        		date++;
        	}
        }
        OverAll.appendChild(row);
        
    }
    update_dataCel();
    restore_Entries();
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

const editBtn = $(".js-event__add");
const saveBtn = $(".js-event__save");
const closeBtn = $(".js-event__close");
const winCreator = $(".js-event__creator");

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
	let inputDate = currentDate;
	let inputNotes = $("textarea[name=notes]").val();

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
	$(".aside__num").text(currentDate);
	$(".aside__month").text(monthText[currentMonth]);
	$(".aside__event").remove();
  //var thisNotes = NOTE;//self.attr("data-notes");

  if (NOTE != null) {
  	$(".aside__eventList").append(
  		"<p class='aside__event'>" +
  		NOTE +
  		"</span></p>"
  		);
  }
}

function update_dataCel() {
	dataCel = $(".cal__cel");
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

function restore_Entries(){
	for (entry of e){
		if (entry.year == currentYear && entry.month == currentMonth){
			dataCel.each(function() {
				if ($(this).children()[0].innerText === entry.date) {
					$(this).attr("data-notes", entry.text);
					$(this).addClass("event");
				}
			});
		}
	}
}

function make_Entry(make_date, journal_entry){
	if (!(journal_entry)){
		return;
	}
	let entry;
	if (entry = e.find(e => (e.year == currentYear && e.month == currentMonth && e.date == make_date))) {
		entry.text = journal_entry;
	} else {
		entry = {year: currentYear, month: currentMonth, date: make_date, text: journal_entry};
		e.push(entry);
	}

	dataCel.each(function() {
		if ($(this).children()[0].innerText === make_date) {
				$(this).attr("data-notes", entry.text);
				$(this).addClass("event"); // needed to make the dot
		}
	});	
} 
