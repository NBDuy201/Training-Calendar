import CalendarContent from "~/modules/calendar/CalendarContent";
import WeekToolbar from "~/modules/calendar/week-toolbar/WeekToolbar";

const TrainingCalendarPage = () => {
  return (
    <div className="px-4 pt-6">
      <WeekToolbar />
      <CalendarContent />
    </div>
  );
};

export default TrainingCalendarPage;
