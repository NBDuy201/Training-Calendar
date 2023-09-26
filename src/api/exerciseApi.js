import { insertItem, moveItem, removeItem } from "~/utils/arrayHelper";

function moveExercise(exerciseData = [], oldPosition = {}, newPosition = {}) {
  let movedSessions = moveItem(
    exerciseData,
    oldPosition.index,
    newPosition.index
  );
  return movedSessions;
}

function deleteExercise(exerciseData = [], exercise) {
  let res = removeItem(exerciseData, exercise, "id");
  return res;
}

function insertExercise(exerciseData = [], toIndex = 0, exercise = {}) {
  let res = insertItem(exerciseData, toIndex, exercise);
  return res;
}

export const exerciseApi = { moveExercise, deleteExercise, insertExercise };
