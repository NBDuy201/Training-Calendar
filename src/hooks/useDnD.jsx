import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { columnApi } from "~/api/columnApi";
import { exerciseApi } from "~/api/exerciseApi";
import { sessionsApi } from "~/api/sessionsApi";
import { DRAG_TYPE, REDUX_STATE } from "~/common/constants";
import {
  addSession,
  updateExercise,
  updateSession,
} from "~/redux-toolkit/calendarSlice";

const useDnD = () => {
  const dispatch = useDispatch();
  const sessions = useSelector((state) => state[REDUX_STATE.CALENDAR]);
  console.log(
    "🚀 ~ file: useCalendar.jsx:17 ~ useCalendar ~ sessions:",
    sessions
  );

  // ================== Handle DnD sessions ==================
  function checkDnDSessionsChanges(destination, source) {
    const destinationSessions = columnApi.getColById(
      sessions,
      parseInt(destination.droppableId)
    );
    const sourceSessions = columnApi.getColById(
      sessions,
      parseInt(source.droppableId)
    );

    const oldPos = {
      index: source.index,
      columnId: parseInt(source.droppableId),
    };
    const newPos = {
      index: destination.index,
      columnId: parseInt(destination.droppableId),
    };

    // === Check changes ===
    const isChangeCol = oldPos.columnId !== newPos.columnId;
    const isChangeIndex = oldPos.index !== newPos.index;

    return {
      isChanged: isChangeCol || isChangeIndex,
      data: {
        isChangeCol,
        destinationSessions,
        sourceSessions,
        newPos,
        oldPos,
      },
    };
  }

  function handleDnDSession(destination, source) {
    const {
      isChanged,
      data: {
        isChangeCol,
        destinationSessions,
        sourceSessions,
        newPos,
        oldPos,
      },
    } = checkDnDSessionsChanges(destination, source);

    if (!isChanged) {
      return;
    }

    // Move item same column
    if (!isChangeCol) {
      const updatedData = {
        columnId: newPos.columnId,
        sessions: sessionsApi.moveSession(destinationSessions, oldPos, newPos),
      };
      dispatch(updateSession(updatedData));
      return;
    }

    // === Move item diff column ===
    //  delete item form cur col
    const newSourceSessions = {
      columnId: oldPos.columnId,
      sessions: sessionsApi.deleteSession(
        sourceSessions,
        sourceSessions[oldPos.index]
      ),
    };
    //  add item to new col
    const newDestinationSessions = {
      columnId: newPos.columnId,
      sessions: sessionsApi.insertSession(
        destinationSessions,
        newPos.index,
        sourceSessions[oldPos.index]
      ),
    };
    dispatch(updateSession(newSourceSessions));
    // dispatch(updateSession(newDestinationSessions));
    dispatch(
      destinationSessions?.length > 0
        ? updateSession(newDestinationSessions)
        : addSession({
            columnId: newDestinationSessions.columnId,
            sessions: [sourceSessions[oldPos.index]],
          })
    );
    console.log("🚀 ~ Source:", newSourceSessions);
    console.log("🚀 ~ Destination:", newDestinationSessions);
  }

  // ================== Handle DnD exercise ==================
  function checkDnDExercisesChanges(destination, source) {
    const [destionationColId, destinationSessionId] =
      destination.droppableId.split("_");
    const [sourceColId, sourceSessionId] = source.droppableId.split("_");

    // Get sessions by columnId of destination and srouce
    const destinationSessions = columnApi.getColById(
      sessions,
      parseInt(destionationColId)
    );
    const sourceSessions = columnApi.getColById(
      sessions,
      parseInt(sourceColId)
    );

    // Get exercises by sessionId of destination and srouce
    const destinationExercises = sessionsApi.getSessionById(
      destinationSessions,
      destinationSessionId
    )?.exercises;
    const sourceExercises = sessionsApi.getSessionById(
      sourceSessions,
      sourceSessionId
    )?.exercises;

    const oldPos = {
      index: source.index,
      columnId: parseInt(sourceColId),
      sessionId: sourceSessionId,
    };
    const newPos = {
      index: destination.index,
      columnId: parseInt(destionationColId),
      sessionId: destinationSessionId,
    };

    // === Check changes ===
    const isChangeCol = oldPos.columnId !== newPos.columnId;
    const isChangeSession = oldPos.sessionId !== newPos.sessionId;
    const isChangeIndex = oldPos.index !== newPos.index;

    return {
      isChanged: isChangeCol || isChangeIndex || isChangeSession,
      data: {
        isChangeSession,
        newPos,
        oldPos,
        destinationExercises,
        sourceExercises,
      },
    };
  }

  function handleDnDExercise(destination, source) {
    const {
      isChanged,
      data: {
        isChangeSession,
        newPos,
        oldPos,
        destinationExercises,
        sourceExercises,
      },
    } = checkDnDExercisesChanges(destination, source);

    if (!isChanged) {
      return;
    }

    // Move item same session
    if (!isChangeSession) {
      const updatedData = {
        columnId: newPos.columnId,
        sessionId: newPos.sessionId,
        exercises: exerciseApi.moveExercise(
          destinationExercises,
          oldPos,
          newPos
        ),
      };
      console.log(
        "🚀 ~ file: CalendarContent.jsx:202 ~ handleDnDExercise ~ updatedData:",
        updatedData
      );
      dispatch(updateExercise(updatedData));
      return;
    }

    // === Move item diff session ===
    //  delete exercise form cur session
    const newSourceExercise = {
      columnId: oldPos.columnId,
      sessionId: oldPos.sessionId,
      exercises: exerciseApi.deleteExercise(
        sourceExercises,
        sourceExercises[oldPos.index]
      ),
    };
    //  add exercise to new session
    const newDestinationExercise = {
      columnId: newPos.columnId,
      sessionId: newPos.sessionId,
      exercises: exerciseApi.insertExercise(
        destinationExercises,
        newPos.index,
        sourceExercises[oldPos.index]
      ),
    };
    dispatch(updateExercise(newSourceExercise));
    dispatch(updateExercise(newDestinationExercise));
    console.log("🚀 ~ Source:", newSourceExercise);
    console.log("🚀 ~ Destination:", newDestinationExercise);
  }

  function handleDragDrop(results) {
    console.log("🚀 ~ file: Home.jsx:16 ~ Home ~ results:", results);
    const { destination, source, type } = results;
    // === Handle drag to empty zone ===
    if (!destination) {
      return;
    }
    switch (type) {
      case DRAG_TYPE.SESSION:
        handleDnDSession(destination, source);
        break;

      case DRAG_TYPE.EXERCISE:
        handleDnDExercise(destination, source);
        break;

      default:
        break;
    }
  }
  return { handleDragDrop };
};

export default useDnD;
