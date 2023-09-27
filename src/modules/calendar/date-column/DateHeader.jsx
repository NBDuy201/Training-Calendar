/* eslint-disable react/prop-types */
import BasicButton from "~/components/button/BasicButton";
import { FaPlusCircle } from "react-icons/fa";
import { useSessionContext } from "~/context/sessionContext";

const DateHeader = ({ day = {} }) => {
  const { openAddSession, setColumnId } = useSessionContext();

  function handleOpenSessionModal() {
    openAddSession();
    setColumnId(day.dateStamp);
  }

  return (
    <div
      key={day.dateStamp}
      className={`flex justify-between items-center py-2 px-1 sticky top-0 bg-white`}
    >
      <p className={`text-sm uppercase text-slate-500`}>
        <strong>{day.weekDayName}</strong>
      </p>
      <BasicButton
        onClick={handleOpenSessionModal}
        className="!p-0 text-secondary border-none"
      >
        <FaPlusCircle />
      </BasicButton>
    </div>
  );
};

export default DateHeader;
