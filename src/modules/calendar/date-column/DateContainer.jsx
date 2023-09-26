/* eslint-disable react/prop-types */
import { isTodaysDate } from "~/utils/dateHelper";
import SessionCard from "~/modules/card/SessionCard";
import { Draggable } from "react-beautiful-dnd";

const DateContainer = ({
  day = {},
  sessionsData = [],
  isDraggingOver = false,
}) => {
  const isToday = isTodaysDate(day.dateStamp);

  return (
    <div
      className={`bg-background p-2 rounded-md h-full 
      ${isDraggingOver ? "bg-hover" : ""}`}
    >
      {/* Date */}
      <p
        className={`text-xs font-extrabold ${
          isToday ? "text-primary" : "text-secondary "
        }`}
      >
        {day.date}
      </p>
      {/* Exercises containers */}
      {sessionsData?.map((session, index) => (
        <Draggable
          key={session.id}
          draggableId={session.id?.toString()}
          index={index}
        >
          {(provided) => (
            <SessionCard
              title={session.title}
              sessionId={`${day.dateStamp}_${session.id}`}
              exercises={session.exercises}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            />
          )}
        </Draggable>
      ))}
    </div>
  );
};

export default DateContainer;
