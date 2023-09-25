/* eslint-disable react/prop-types */
import moment from "moment";
import TimeNavigation from "./TimeNavigation";

function WeekToolbar({
  goToPreviousWeek = () => {},
  goToNextWeek = () => {},
  goToToday = () => {},
  startDate = moment(),
}) {
  const formattedDate = moment(startDate).format("MMMM, YYYY");
  // const today = moment().format("DD-MM-YYYY");
  return (
    <div className="w-full flex justify-end">
      <TimeNavigation
        goToToday={goToToday}
        goToPreviousWeek={goToPreviousWeek}
        goToNextWeek={goToNextWeek}
        formattedDate={formattedDate}
      />
    </div>
  );
}
export default WeekToolbar;
