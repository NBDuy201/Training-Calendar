/* eslint-disable react/prop-types */

const DateHeader = ({ day = {} }) => {
  return (
    <div key={day.dateStamp} className={`py-2`}>
      <p className={`text-sm font-semibold uppercase text-secondary`}>
        {day.weekDayName}
      </p>
    </div>
  );
};

export default DateHeader;
