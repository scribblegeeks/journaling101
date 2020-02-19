var editBtn = $(".js-event__add");
var saveBtn = $(".js-event__save");
var closeBtn = $(".js-event__close");
var winCreator = $(".js-event__creator");
var inputDate = $(this).data();
var e = {}; // object of entries
update_dataCel();

//
//
//  BUTTTONS ON PRESS
//
//

//open edit window
editBtn.on("click", function() {
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
  var inputTag = $("select[name=tags]").find(":selected").text();

  dataCel.each(function() {
    if ($(this).children()[0].innerText === inputDate) {
      if (inputNotes != null) {
        $(this).attr("data-notes", inputNotes);
      }
      $(this).addClass("event");
      if (inputTag != null) {
        $(this).addClass("event--" + inputTag);
      }
      fillEventSidebar($(this));
    }
  });

  closeEdit();
});

//
//
//  FUNCTIONS TO RUN ENTRIES
//
//

function fillEventSidebar(self) {
    $(".c-aside__event").remove();
    var thisNotes = self.attr("data-notes");
    var thisEvent = self.hasClass("event");
    
    switch (true) {
      case thisEvent:
      $(".c-aside__eventList").append(
        "<p class='c-aside__event'>" +
        thisNotes +
        "</span></p>"
        );
      break;
    }
}
  
function update_dataCel() {
  dataCel = $(".c-cal__cel");
  dataCel.on("click", function() {
    var thisEl = $(this);
    currentDate = $(this).children()[0].innerText;
    sidebarDate();

    fillEventSidebar($(this));

    dataCel.removeClass("isSelected");
    thisEl.addClass("isSelected");
  });
}

//handles closing edit 
function closeEdit() {
  winCreator.removeClass("isVisible");
  $("body").removeClass("overlay");
  $("#edit")[0].reset();
}

function sidebarDate(){
  $(".c-aside__num").text(currentDate);
  $(".c-aside__month").text(monthText[currentMonth]);
}

function save_Entries() {

}