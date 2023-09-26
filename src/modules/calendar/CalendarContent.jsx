import moment from "moment";
import React from "react";
import { getAllDaysInTheWeek } from "~/utils/dateHelper";
import CalendarColumn from "./date-column/CalendarColumn";
import { DragDropContext } from "react-beautiful-dnd";
import { sessionsApi } from "~/api/sessionsApi";
import { useDispatch } from "react-redux";
import { updateSession } from "~/redux-toolkit/sessionSlice";
import { useSelector } from "react-redux";
import { columnApi } from "~/api/columnApi";

const CalendarContent = () => {
  const [stateCalendar, setStateCalendar] = React.useState({
    startDate: moment(),
    weekDays: getAllDaysInTheWeek(moment()),
    eventStart: null,
    eventEnd: null,
  });

  const dispatch = useDispatch();
  const sessions = useSelector((state) => state.sessions);
  console.log(
    "🚀 ~ file: CalendarContent.jsx:22 ~ CalendarContent ~ sessions:",
    sessions
  );

  function handleDragDrop(results) {
    console.log("🚀 ~ file: Home.jsx:16 ~ Home ~ results:", results);
    const { destination, source, type } = results;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Move item
    const oldPos = {
      index: source.index,
      columnId: parseInt(source.droppableId),
    };
    const newPos = {
      index: destination.index,
      columnId: parseInt(destination.droppableId),
    };
    const updatedData = {
      columnId: newPos.columnId,
      sessions: sessionsApi.moveSession(
        columnApi.getColById(sessions, parseInt(destination.droppableId)),
        oldPos,
        newPos
      ),
    };
    dispatch(updateSession(updatedData));

    // Update workout req for BE
    // let tmpWorkouts = addWorkout(
    //   workoutToUpdate,
    //   updatedWorkouts[destination.index]
    // );
    // tmpWorkouts = addWorkout(tmpWorkouts, updatedWorkouts[source.index]);
    // setWorkoutToUpdate(tmpWorkouts);
  }

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
