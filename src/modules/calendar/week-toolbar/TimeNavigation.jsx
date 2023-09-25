/* eslint-disable react/prop-types */
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import BasicButton from "~/components/button/BasicButton";

const TimeNavigation = ({
  today,
  goToToday = () => {},
  goToPreviousWeek = () => {},
  goToNextWeek = () => {},
  formattedDate = "",
  nextContent = "",
  prevContent = "",
  className = "",
  classNameItem = "",
  orderToday = "mr-2",
}) => {
  return (
    <div className={`flex gap-x-2 items-center ${className}`}>
      <BasicButton
        className={`py-2 ${orderToday} ${classNameItem}`}
        title={today}
        onClick={goToToday}
      >
        Hôm nay
      </BasicButton>

      <BasicButton
        className={classNameItem}
        // title="Tuần trước"
        onClick={goToPreviousWeek}
      >
        {!prevContent ? <MdArrowBackIosNew className="" /> : prevContent}
      </BasicButton>

      <BasicButton
        className={classNameItem}
        // title="Tuần sau"
        onClick={goToNextWeek}
      >
        {!nextContent ? <MdArrowForwardIos className="" /> : nextContent}
      </BasicButton>

      <p className="font-semibold text-xl capitalize">{formattedDate}</p>
    </div>
  );
};

export default TimeNavigation;
