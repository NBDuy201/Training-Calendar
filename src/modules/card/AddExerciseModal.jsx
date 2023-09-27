/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { SCHEMA_FIELD_NAME } from "~/common/constants";
import { exerciseSchema } from "~/common/form-schema";
import BasicButton from "~/components/button/BasicButton";
import BasicTextBox from "~/components/input/BasicTextBox";
import { v4 as uuidv4 } from "uuid";

import { AiFillCloseCircle } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addExercise } from "~/redux-toolkit/calendarSlice";

export const MAX_ANS = 10;
export const MIN_ANS = 1;

const EXERCISE_NAME_FIELD = SCHEMA_FIELD_NAME.EXERCISE_SCHEMA.NAME;
const EXERCISE_SETS_FIELD = SCHEMA_FIELD_NAME.EXERCISE_SCHEMA.SETS;
const EXERCISE_SINGLE_SET_FIELD = SCHEMA_FIELD_NAME.SINGLE_EXERCISE_SCHEMA.SET;

const defSchemaVal = {
  [SCHEMA_FIELD_NAME.EXERCISE_SCHEMA.NAME]: "Exercise name",
  [SCHEMA_FIELD_NAME.EXERCISE_SCHEMA.SETS]: [
    { [EXERCISE_SINGLE_SET_FIELD]: "Set 1" },
    { [EXERCISE_SINGLE_SET_FIELD]: "Set 2" },
  ],
};

const AddExerciseModal = ({
  closeModal = () => {},
  isOpen = false,
  sessionInfo = {},
}) => {
  // Form
  const {
    handleSubmit,
    getValues,
    control,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(exerciseSchema),
    defaultValues: defSchemaVal,
    mode: "onChange",
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: EXERCISE_SETS_FIELD,
  });
  const isMaxAns = fields.length === MAX_ANS;
  const isMinAns = fields.length === MIN_ANS;

  const dispatch = useDispatch();

  // Form handle func
  function handleAddExercise() {
    if (fields.length < MAX_ANS) {
      append({ [EXERCISE_SINGLE_SET_FIELD]: "Set" });
    }
  }

  function handleRemoveExercise(index) {
    if (fields.length > MIN_ANS) {
      remove(index);
    }
  }

  async function onSubmit(data) {
    const reqData = {
      ...data,
      [EXERCISE_SETS_FIELD]: Array.from(
        data[EXERCISE_SETS_FIELD],
        (item) => item[EXERCISE_SINGLE_SET_FIELD]
      ),
      id: uuidv4(),
      columnId: parseInt(sessionInfo.columnId),
      sessionId: sessionInfo.sessionId,
    };
    console.log(
      "🚀 ~ file: AddExerciseModal.jsx:73 ~ onSubmit ~ reqData:",
      reqData
    );
    dispatch(addExercise(reqData));
    closeModal();
  }

  function handleResetForm() {
    reset(defSchemaVal);
  }

  React.useEffect(() => {
    if (!isOpen) {
      handleResetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[400px]">
      <h2 className="mx-auto text-center mb-6">Add Exercise</h2>
      {/* Exercise name field */}
      <BasicTextBox
        label="Name"
        control={control}
        name={EXERCISE_NAME_FIELD}
        autoComplete="off"
        errors={
          errors[EXERCISE_NAME_FIELD]
            ? errors[EXERCISE_NAME_FIELD]?.message
            : null
        }
        defaultValue={getValues(EXERCISE_NAME_FIELD)}
        className="w-full px-4 py-2 outline-none border rounded-md border-slate-400 
          focus:border-black focus:font-medium focus:text-black transition-all"
        wrapperClass="w-full mb-4"
      />

      {/* Exercise sets fields */}
      <label className={`font-medium text-black`}>Exercises</label>
      {fields.map((item, index) => {
        return (
          <div
            key={item.id}
            className="flex gap-x-2 items-center relative mb-2"
          >
            <BasicTextBox
              control={control}
              name={`${EXERCISE_SETS_FIELD}[${index}][${EXERCISE_SINGLE_SET_FIELD}]`}
              autoComplete="off"
              errors={
                errors[EXERCISE_SETS_FIELD]
                  ? errors[EXERCISE_SETS_FIELD][index]
                    ? errors[EXERCISE_SETS_FIELD][index]
                      ? errors[EXERCISE_SETS_FIELD][index][
                          EXERCISE_SINGLE_SET_FIELD
                        ]?.message
                      : null
                    : null
                  : null
              }
              defaultValue={getValues(
                `${EXERCISE_SETS_FIELD}[${index}][${EXERCISE_SINGLE_SET_FIELD}]`
              )}
              className="w-full px-4 py-2 outline-none border rounded-md border-slate-400
                focus:border-black focus:font-medium focus:text-black transition-all"
              wrapperClass="w-full"
            />

            {/* Remove ans btn */}
            <BasicButton
              type="button"
              onClick={() => handleRemoveExercise(index)}
              className={`!p-0 border-none text-xl absolute top-[0.7rem] right-2 text-secondary hover:text-hover
                ${isMinAns ? "hidden" : ""}
                `}
            >
              {/* <Close /> */}
              <AiFillCloseCircle />
            </BasicButton>
          </div>
        );
      })}

      {/* Add more ans btn */}
      <BasicButton
        type="button"
        onClick={handleAddExercise}
        className={`mb-4 !p-2 border border-slate-400 rounded-md w-full flex items-center hover:opacity-70
          justify-center gap-x-1 text-slate-400 ${isMaxAns ? "!hidden" : ""}`}
      >
        {/* <AddCircle /> */}
        <IoMdAddCircleOutline className="text-xl" />
        <span>Add exercises</span>
      </BasicButton>
      <div className="flex justify-center gap-x-2">
        <BasicButton
          type="button"
          onClick={closeModal}
          className="!px-3 !py-2 font-semibold hover:opacity-60"
        >
          Cancel
        </BasicButton>
        <BasicButton
          disabled={!isValid}
          type="submit"
          className="!px-3 !py-2 bg-primary text-white font-semibold hover:opacity-60"
        >
          Submit
        </BasicButton>
      </div>
    </form>
  );
};

export default AddExerciseModal;
