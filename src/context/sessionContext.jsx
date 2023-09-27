import React from "react";
import usePopup from "~/hooks/usePopup";

const SessionContext = React.createContext();
function SessionProvider(props) {
  const [sessionInfo, setSessionInfo] = React.useState(null);
  const [columnId, setColumnId] = React.useState(null);
  const {
    open: isOpenAddExercise,
    handleClosePopup: closeAddExercise,
    handleOpenPopup: openAddExercise,
  } = usePopup();
  const {
    open: isOpenAddSession,
    handleClosePopup: closeAddSession,
    handleOpenPopup: openAddSession,
  } = usePopup();

  const value = {
    // Exercise modal
    isOpenAddExercise,
    closeAddExercise,
    openAddExercise,

    // Session modal
    isOpenAddSession,
    closeAddSession,
    openAddSession,

    sessionInfo,
    setSessionInfo,
    columnId,
    setColumnId,
  };

  return (
    <SessionContext.Provider value={value} {...props}></SessionContext.Provider>
  );
}
function useSessionContext() {
  const context = React.useContext(SessionContext);
  if (typeof context === "undefined")
    throw new Error("useSession must be used within SessionProvider");
  return context;
}
// eslint-disable-next-line react-refresh/only-export-components
export { SessionProvider, useSessionContext };
