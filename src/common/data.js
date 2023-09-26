import { v4 as uuidv4 } from "uuid";

export const data = [
  {
    columnId: 1695574800000,
    sessions: [
      {
        id: uuidv4(),
        title: "title 1",
        exercises: [
          {
            id: uuidv4(),
            name: "Exercise 1",
            infomation: ["50lb x 9", "40 lb x 7"],
          },
          {
            id: uuidv4(),
            name: "Exercise 2",
            infomation: ["50lb x 9", "40 lb x 7", "40 lb x 7", "40 lb x 7"],
          },
          {
            id: uuidv4(),
            name: "Exercise 4",
            infomation: ["50lb x 9", "40 lb x 7", "40 lb x 7", "40 lb x 7"],
          },
        ],
      },
    ],
  },
  {
    columnId: 1695661200000,
    sessions: [
      {
        id: uuidv4(),
        title: "title 2",
        exercises: [
          {
            id: uuidv4(),
            name: "Exercise 3",
            infomation: ["50lb x 9"],
          },
        ],
      },
      { id: uuidv4(), title: "title 3", exercises: [] },
    ],
  },
  {
    columnId: 1695920400000,
    sessions: [
      {
        id: uuidv4(),
        title: "title 5",
        exercises: [
          {
            id: uuidv4(),
            name: "Exercise test",
            infomation: ["50lb x 9"],
          },
        ],
      },
    ],
  },
];
