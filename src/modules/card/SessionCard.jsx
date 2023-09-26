/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import BasicButton from "~/components/button/BasicButton";
import ExerciseCard from "./ExerciseCard";

const iconBtnClass = "border-none !p-0 text-secondary hover:opacity-50";

const SessionCard = ({ title = "", exercises = [], ...props }, ref) => {
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
      {exercises?.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
      <BasicButton className={`${iconBtnClass} self-end mt-1`}>
        <FaPlusCircle />
      </BasicButton>
    </div>
  );
};

export default React.forwardRef(SessionCard);
