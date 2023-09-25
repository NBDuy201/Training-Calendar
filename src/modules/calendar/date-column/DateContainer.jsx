/* eslint-disable react/prop-types */
import { isTodaysDate } from "~/utils/dateHelper";
import SessionCard from "~/modules/card/SessionCard";

const DateContainer = ({ day = {} }) => {
  const isToday = isTodaysDate(day.dateStamp);

  return (
    <div className={`bg-background p-2 rounded-md flex-1`}>
      {/* Date */}
      <p
        className={`text-xs font-extrabold ${
          isToday ? "text-primary" : "text-secondary "
        }`}
      >
        {day.date}
      </p>
      {/* Exercises containers */}
      <SessionCard title="title 1" />
      <SessionCard title="title lonngdasdsadsa dsa" />
    </div>
  );
};

export default DateContainer;
