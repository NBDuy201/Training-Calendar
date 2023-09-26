import { insertItem, moveItem, removeItem } from "~/utils/arrayHelper";

function getSessionById(sessions = [], sessionId = "") {
  return sessions.find((session) => session.id === sessionId);
}

function moveSession(sessionsData = [], oldPosition = {}, newPosition = {}) {
  let movedSessions = moveItem(
    sessionsData,
    oldPosition.index,
    newPosition.index
  );
  return movedSessions;
}

function deleteSession(sessionsData = [], session = {}) {
  let res = removeItem(sessionsData, session, "id");
  return res;
}

function insertSession(sessionsData = [], toIndex = 0, session = {}) {
  let res = insertItem(sessionsData, toIndex, session);
  return res;
}

export const sessionsApi = {
  moveSession,
  deleteSession,
  insertSession,
  getSessionById,
};
