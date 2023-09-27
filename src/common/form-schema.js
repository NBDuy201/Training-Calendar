import * as yup from "yup";
import { SCHEMA_FIELD_NAME } from "./constants";

const singleExerciseSchema = {
  [SCHEMA_FIELD_NAME.SINGLE_EXERCISE_SCHEMA.SET]: yup
    .string()
    .required("Please enter set information")
    .trim(),
};

export const exerciseSchema = yup.object({
  [SCHEMA_FIELD_NAME.EXERCISE_SCHEMA.NAME]: yup
    .string()
    .required("Please enter exercise name")
    .trim(),
  [SCHEMA_FIELD_NAME.EXERCISE_SCHEMA.SETS]: yup
    .array()
    .of(yup.object().shape(singleExerciseSchema)),
});

export const sessionSchema = yup.object({
  [SCHEMA_FIELD_NAME.SESSION_SCHEMA.TITLE]: yup
    .string()
    .required("Please enter session")
    .trim(),
});
