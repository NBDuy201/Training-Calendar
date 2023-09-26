/* eslint-disable react/prop-types */
import CalendarColumn from "./date-column/CalendarColumn";
import { DragDropContext } from "react-beautiful-dnd";
import useDnD from "~/hooks/useDnD";

const CalendarContent = ({ stateCalendar = {} }) => {
  const { handleDragDrop } = useDnD();

  return (
    <div className="grid grid-cols-7 gap-x-3 w-full mt-4 flex-1">
      <DragDropContext onDragEnd={handleDragDrop}>
        {stateCalendar?.weekDays.map((day) => (
          <CalendarColumn
            key={day.dateStamp}
            day={day}
            columnId={day.dateStamp}
          />
        ))}
      </DragDropContext>
    </div>
  );
};

export default CalendarContent;
