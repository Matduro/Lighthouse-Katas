//You'll be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. You'll be expected to parse the given string and produce a human readable date.

function written_month(month_num) {
  switch (month_num) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
  }
}

function written_day(day_num) {
  if (day_num == 1 || day_num == 21 || day_num == 31) {
    return day_num.toString() + "st";
  } else if (day_num == 2 || day_num == 22) {
    return day_num.toString() + "nd";
  } else if (day_num == 3 || day_num == 23) {
    return day_num.toString() + "rd";
  } else {
    return day_num.toString() + "th";
  }
}

function talkingCalendar(date) {
  var date_arr = date.split('/');
  var year = date_arr[0];
  var month = written_month(parseInt(date_arr[1]));
  var day = written_day(parseInt(date_arr[2]));
  return (month + " " + day + ", " + year);
}



console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));