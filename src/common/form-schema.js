import * as yup from "yup";
import { SCHEMA_FIELD_NAME } from "./constants";

const singleExerciseSchema = {
  [SCHEMA_FIELD_NAME.SINGLE_EXERCISE_SCHEMA.SET]: yup
    .string()
    .required("Please enter set informaation")
    .default(""),
};

export const exerciseSchema = yup.object({
  [SCHEMA_FIELD_NAME.EXERCISE_SCHEMA.NAME]: yup
    .string()
    .required("Please enter exercise name"),
  [SCHEMA_FIELD_NAME.EXERCISE_SCHEMA.SETS]: yup
    .array()
    .of(yup.object().shape(singleExerciseSchema)),
});
