/* eslint-disable react/prop-types */
import { Droppable } from "react-beautiful-dnd";
import DateContainer from "./DateContainer";
import DateHeader from "./DateHeader";
import React from "react";
import { useSelector } from "react-redux";
import { columnApi } from "~/api/columnApi";

const CalendarColumn = ({ day = {} }) => {
  const sessions = useSelector((state) => state.sessions);
  const sessionsData = React.useMemo(() => {
    return columnApi.getColById(sessions, day.dateStamp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessions]);

  return (
    <div className="flex flex-col">
      <DateHeader day={day} />
      {/* Date container */}
      <Droppable
        key={day.dateStamp}
        droppableId={day.dateStamp?.toString()}
        type="group"
      >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            className="flex-1"
            {...provided.droppableProps}
          >
            <DateContainer day={day} sessionsData={sessionsData} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default CalendarColumn;
