import moment from "moment";

export function getAllDaysInTheWeek(currentDate = moment()) {
  const weekStart = currentDate.clone().startOf("week").add(1, "day");

  const days = Array.from(Array(7))
    .map((day, index) => index)
    .map((day) =>
      moment(weekStart).add(day, "days").set("minutes", 0).set("seconds", 0)
    )
    .map((momentObj) => ({
      date: momentObj.date(),
      dateStamp: +momentObj,
      weekDayName: momentObj.format("ddd"),
    }));

  return days;
}

export function isTodaysDate(dateStamp) {
  const today = moment();
  dateStamp = moment(dateStamp);
  return (
    moment.duration(dateStamp.diff(today)).days() === 0 &&
    today.day() === dateStamp.day()
  );
}

export function getAllDaysInNextWeek(startDate) {
  const nextWeekDate = moment(startDate).add(7, "days");

  return {
    nextWeekDate,
    weekDays: getAllDaysInTheWeek(nextWeekDate),
  };
}

export function getAllDaysInLastWeek(startDate) {
  const lastWeekDate = moment(startDate).subtract(7, "days");

  return {
    lastWeekDate,
    weekDays: getAllDaysInTheWeek(lastWeekDate),
  };
}
