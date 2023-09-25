/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react";
import DateContainer from "./DateContainer";
import DateHeader from "./DateHeader";

const CalendarColumn = ({ day = {}, ...props }, ref) => {
  return (
    <div ref={ref} className="flex flex-col" {...props}>
      <DateHeader day={day} />
      {/* Date container */}
      <DateContainer day={day} />
    </div>
  );
};

export default React.forwardRef(CalendarColumn);
