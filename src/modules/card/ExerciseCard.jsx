const ExerciseCard = () => {
  return (
    <div className="exercise shadow-md mb-2 flex items-end flex-col p-2">
      <p>Exercise 1</p>
      <div className="flex justify-between w-full text-secondary">
        <span>
          <strong>3x</strong>
        </span>
        <span>30lb x6</span>
      </div>
    </div>
  );
};

export default ExerciseCard;
