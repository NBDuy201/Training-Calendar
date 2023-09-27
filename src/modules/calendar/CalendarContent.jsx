/* eslint-disable react/prop-types */
import CalendarColumn from "./date-column/CalendarColumn";
import { DragDropContext } from "react-beautiful-dnd";
import BasicModal from "~/components/modal/BasicModal";
import useDnD from "~/hooks/useDnD";
import AddExerciseModal from "../card/AddExerciseModal";
import { useSessionContext } from "~/context/sessionContext";

const CalendarContent = ({ stateCalendar = {} }) => {
  const { handleDragDrop } = useDnD();

  const { isOpenAddExercise, closeAddExercise, sessionInfo } =
    useSessionContext();

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
      <BasicModal open={isOpenAddExercise} handleClose={closeAddExercise}>
        <AddExerciseModal
          isOpen={isOpenAddExercise}
          closeModal={closeAddExercise}
          sessionInfo={sessionInfo}
        />
      </BasicModal>
    </div>
  );
};

export default CalendarContent;
