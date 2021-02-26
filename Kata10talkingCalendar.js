const talkingCalendar = function(date) {
  let year = date.slice(0, 4);
  let month = date.slice(5 ,7);
  let day = date.slice(8, 10);
  let wordedDate = '';
  let theMonths = ["January ", "February ", "March ", "April ", "May ", "June ", "July ", "August ", "September ", "October", "November ", "December "];
  wordedDate += theMonths[(Number(month)) - 1];
  switch(day) {
    case day == "11" || "13":
      wordedDate += day + "th, ";
      break;
    case day.charAt(1) == "1":
      wordedDate += day + "st, ";
      break;
    case day.charAt(1) == "2":
      wordedDate += wordedDate + day + "nd, ";
      break;
    case day.charAt(1) == "3":
        wordedDate += day + "rd, ";
        break;
    default:
      wordedDate += day + "th, ";
      break;
  };
  wordedDate += year;
  return wordedDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

/*
December 2nd, 2017
November 11th, 2007
August 24th, 1987

The following switch statement did not work, and I don't know why.

  switch(month) {
    case month == "01":
      wordedDate += "January ";
      break;
    case month == "02":
      wordedDate += "February ";
      break;
    case month == "03":
      wordedDate += "March ";
      break;
    case month == "04":
      wordedDate += "April ";
      break;
    case month == "05":
      wordedDate += "May ";
      break;
    case month == "06":
      wordedDate += "June ";
      break;
    case month == "07":
      wordedDate += "July ";
      break;
    case month == "08":
      wordedDate += "August ";
      break;
    case month == "09":
      wordedDate += "September ";
      break;
    case month == "10":
      wordedDate += "October ";
      break;
    case month == "11":
      wordedDate += "November ";
      break;
    case month == "12":
      wordedDate += "December ";
      break;
  };
*/