/* eslint-disable react/prop-types */
import DateContainer from "./DateContainer";
import DateHeader from "./DateHeader";

const CalendarColumn = ({ day = {} }) => {
  return (
    <div>
      <DateHeader day={day} />
      {/* Date container */}
      <DateContainer day={day} />
    </div>
  );
};

export default CalendarColumn;
