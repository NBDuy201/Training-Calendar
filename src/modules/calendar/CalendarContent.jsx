import moment from "moment";
import React from "react";
import { getAllDaysInTheWeek } from "~/utils/dateHelper";
import CalendarColumn from "./date-column/CalendarColumn";

const CalendarContent = () => {
  const [stateCalendar, setStateCalendar] = React.useState({
    startDate: +moment(),
    weekDays: getAllDaysInTheWeek(moment()),
    eventStart: null,
    eventEnd: null,
  });

  return (
    <div className="grid grid-cols-7 gap-x-2 w-full mt-4 mr-2">
      {stateCalendar?.weekDays.map((day) => (
        <CalendarColumn key={day.dateStamp} day={day} />
      ))}
    </div>
  );
};

export default CalendarContent;
