import moment from "moment";
import React from "react";
import CalendarContent from "~/modules/calendar/CalendarContent";
import WeekToolbar from "~/modules/calendar/week-toolbar/WeekToolbar";
import {
  getAllDaysInLastWeek,
  getAllDaysInNextWeek,
  getAllDaysInTheWeek,
} from "~/utils/dateHelper";

const TrainingCalendarPage = () => {
  const [stateCalendar, setStateCalendar] = React.useState({
    startDate: moment(),
    weekDays: getAllDaysInTheWeek(moment()),
  });

  function gotToNextWeek() {
    const { nextWeekDate, weekDays } = getAllDaysInNextWeek(
      stateCalendar.startDate
    );
    setStateCalendar((prv) => ({ ...prv, startDate: nextWeekDate, weekDays }));
  }

  function goToPrvWeek() {
    const { lastWeekDate, weekDays } = getAllDaysInLastWeek(
      stateCalendar.startDate
    );
    setStateCalendar((prv) => ({ ...prv, startDate: lastWeekDate, weekDays }));
  }

  function goToToday() {
    setStateCalendar((prv) => ({
      ...prv,
      startDate: moment(),
      weekDays: getAllDaysInTheWeek(moment()),
    }));
  }

  return (
    <div className="px-pagePaddingX py-pagePaddingY min-h-screen flex flex-col">
      <WeekToolbar
        goToNextWeek={gotToNextWeek}
        goToPreviousWeek={goToPrvWeek}
        goToToday={goToToday}
        startDate={stateCalendar.startDate}
      />
      <CalendarContent stateCalendar={stateCalendar} />
    </div>
  );
};

export default TrainingCalendarPage;
