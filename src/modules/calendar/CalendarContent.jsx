import moment from "moment";
import React from "react";
import { getAllDaysInTheWeek } from "~/utils/dateHelper";
import CalendarColumn from "./date-column/CalendarColumn";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const CalendarContent = () => {
  const [stateCalendar, setStateCalendar] = React.useState({
    startDate: +moment(),
    weekDays: getAllDaysInTheWeek(moment()),
    eventStart: null,
    eventEnd: null,
  });

  function handleDragDrop(results) {
    // console.log("🚀 ~ file: Home.jsx:16 ~ Home ~ results:", results);
    const { destination, source, type } = results;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Move item
    // let movedWorkouts = moveItem(sortedData, source.index, destination.index);
    // let updatedWorkouts =
    //   movedWorkouts?.map((item, index) => ({
    //     ...item,
    //     index: index,
    //   })) ?? [];
    // setSortedData(updatedWorkouts);

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
          <Droppable
            key={day.dateStamp}
            droppableId={day.dateStamp?.toString()}
            type="group"
          >
            {(provided) => (
              <CalendarColumn
                day={day}
                ref={provided.innerRef}
                {...provided.droppableProps}
              />
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
};

export default CalendarContent;
