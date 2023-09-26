function moveItem(arr = [], from = 0, to = 0) {
  let res = [...arr];
  let fromItem = res.splice(from, 1)[0]; // remove 'from' item + store it
  res.splice(to, 0, fromItem); // insert stored 'from' item

  return res;
}

function moveSession(sessionsData = [], oldPosition = {}, newPosition = {}) {
  // const isChangeCol = oldPosition.columnId !== newPosition.columnId;
  const isChangeIndex = oldPosition.index !== newPosition.index;

  // if (isChangeCol) {
  //   let movedWorkouts = moveItem(sortedData, source.index, destination.index);
  //   let updatedWorkouts =
  //     movedWorkouts?.map((item, index) => ({
  //       ...item,
  //       index: index,
  //     })) ?? [];
  //   setSortedData(updatedWorkouts);
  // }

  if (isChangeIndex) {
    let movedSessions = moveItem(
      sessionsData,
      oldPosition.index,
      newPosition.index
    );
    return movedSessions;
  }
}

export const sessionsApi = { moveSession };
