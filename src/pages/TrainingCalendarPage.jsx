import CalendarContent from "~/modules/calendar/CalendarContent";
import WeekToolbar from "~/modules/calendar/week-toolbar/WeekToolbar";

const TrainingCalendarPage = () => {
  return (
    <div className="px-pagePaddingX py-pagePaddingY min-h-screen flex flex-col">
      <WeekToolbar />
      <CalendarContent />
    </div>
  );
};

export default TrainingCalendarPage;
