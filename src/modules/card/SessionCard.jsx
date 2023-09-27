/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import BasicButton from "~/components/button/BasicButton";
import ExerciseCard from "./ExerciseCard";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { DRAG_TYPE } from "~/common/constants";
import { useSessionContext } from "~/context/sessionContext";

const iconBtnClass = "border-none !p-0 text-secondary hover:opacity-50";

const SessionCard = (
  { sessionId = "", title = "", exercises = [], ...props },
  ref
) => {
  const { openAddExercise, setSessionInfo } = useSessionContext();

  function handleOpenAddExercise() {
    openAddExercise();
    const [columnId, onlySessionId] = sessionId.split("_");
    const sessionInfo = {
      columnId,
      sessionId: onlySessionId,
    };
    setSessionInfo(sessionInfo);
  }

  return (
    <div
      ref={ref}
      className="session-card mt-2 bg-white rounded-md p-2 shadow-md flex flex-col"
      {...props}
    >
      <div className="w-full flex justify-between items-center">
        <div className="text-primary font-bold truncate mb-1 mr-4">{title}</div>
        <BasicButton className={`${iconBtnClass}`}>
          <BsThreeDots />
        </BasicButton>
      </div>
      <Droppable droppableId={sessionId} type={DRAG_TYPE.EXERCISE}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={snapshot.isDraggingOver ? "bg-hover" : ""}
          >
            {exercises?.map((exercise, index) => (
              <Draggable
                key={exercise.id}
                draggableId={exercise.id?.toString()}
                index={index}
              >
                {(provided) => (
                  <ExerciseCard
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    exercise={exercise}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <BasicButton
        onClick={handleOpenAddExercise}
        className={`${iconBtnClass} self-end mt-1`}
      >
        <FaPlusCircle />
      </BasicButton>
    </div>
  );
};

export default React.forwardRef(SessionCard);
