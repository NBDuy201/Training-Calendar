import moment from "moment";
import React from "react";
import {
  getAllDaysInLastWeek,
  getAllDaysInNextWeek,
  getAllDaysInTheWeek,
} from "~/utils/dateHelper";

const useCalendar = () => {
  const [stateCalendar, setStateCalendar] = React.useState({
    startDate: moment(),
    weekDays: getAllDaysInTheWeek(moment()),
  });

  function gotToNextWeek() {
    const { nextWeekDate, weekDays } = getAllDaysInNextWeek(
      stateCalendar.startDate
    );
    setStateCalendar((prv) => ({
      ...prv,
      startDate: nextWeekDate,
      weekDays,
    }));
  }

  function goToPrvWeek() {
    const { lastWeekDate, weekDays } = getAllDaysInLastWeek(
      stateCalendar.startDate
    );
    setStateCalendar((prv) => ({
      ...prv,
      startDate: lastWeekDate,
      weekDays,
    }));
  }

  function goToToday() {
    setStateCalendar((prv) => ({
      ...prv,
      startDate: moment(),
      weekDays: getAllDaysInTheWeek(moment()),
    }));
  }
  return { stateCalendar, goToPrvWeek, goToToday, gotToNextWeek };
};

export default useCalendar;
