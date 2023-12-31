import { SessionProvider } from "~/context/sessionContext";
import useCalendar from "~/hooks/useCalendar";
import CalendarContent from "~/modules/calendar/CalendarContent";
import WeekToolbar from "~/modules/calendar/week-toolbar/WeekToolbar";

const TrainingCalendarPage = () => {
  const { goToPrvWeek, goToToday, gotToNextWeek, stateCalendar } =
    useCalendar();

  return (
    <div className="px-pagePaddingX py-pagePaddingY min-h-screen flex flex-col">
      <WeekToolbar
        goToNextWeek={gotToNextWeek}
        goToPreviousWeek={goToPrvWeek}
        goToToday={goToToday}
        startDate={stateCalendar.startDate}
      />
      <SessionProvider>
        <CalendarContent stateCalendar={stateCalendar} />
      </SessionProvider>
    </div>
  );
};

export default TrainingCalendarPage;
