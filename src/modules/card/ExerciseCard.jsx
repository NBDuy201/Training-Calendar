/* eslint-disable react/prop-types */
const ExerciseCard = ({ exercise = {} }) => {
  return (
    <div className="exercise shadow-md mb-2 flex items-end flex-col p-2">
      <p>{exercise.name}</p>
      <div className="flex justify-between items-center gap-x-5 w-full text-secondary">
        <span>
          <strong>{exercise?.infomation?.length}x</strong>
        </span>
        <span className="text-sm truncate">
          {exercise?.infomation?.join(", ")}
        </span>
      </div>
    </div>
  );
};

export default ExerciseCard;
