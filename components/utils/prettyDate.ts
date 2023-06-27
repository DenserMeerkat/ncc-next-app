const prettyDate = (date: string) => {
  const dateList = date.split("-");
  const year = dateList[2];
  const month = getMonth(dateList[1]);
  var day = dateList[0];
  if (day[0] === "0") {
    day = day.substring(1);
  }
  return `${month} ${day}, ${year}`;
};

const getMonth = (month: string) => {
  switch (month) {
    case "01":
      return "Jan";
    case "02":
      return "Feb";
    case "03":
      return "Mar";
    case "04":
      return "Apr";
    case "05":
      return "May";
    case "06":
      return "Jun";
    case "07":
      return "Jul";
    case "08":
      return "Aug";
    case "09":
      return "Sep";
    case "10":
      return "Oct";
    case "11":
      return "Nov";
    case "12":
      return "Dec";
    default:
      return "Jan";
  }
};

export default prettyDate;
