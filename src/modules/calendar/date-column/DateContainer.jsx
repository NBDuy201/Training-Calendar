/* eslint-disable react/prop-types */
import { isTodaysDate } from "~/utils/dateHelper";

const DateContainer = ({ day = {} }) => {
  const isToday = isTodaysDate(day.dateStamp);

  return (
    <div className="h-40 bg-background p-2">
      <p
        className={`text-xs font-extrabold ${
          isToday ? "text-primary" : "text-secondary "
        }`}
      >
        {day.date}
      </p>
    </div>
  );
};

export default DateContainer;
