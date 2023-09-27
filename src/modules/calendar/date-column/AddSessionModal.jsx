/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SCHEMA_FIELD_NAME } from "~/common/constants";
import { sessionSchema } from "~/common/form-schema";
import BasicTextBox from "~/components/input/BasicTextBox";
import BasicModal from "~/components/modal/BasicModal";
import { v4 as uuidv4 } from "uuid";
import BasicButton from "~/components/button/BasicButton";
import { useDispatch } from "react-redux";
import { addSession } from "~/redux-toolkit/calendarSlice";

const SESSION_TITLE_FIELD = SCHEMA_FIELD_NAME.SESSION_SCHEMA.TITLE;

const defSchemaVal = {
  [SESSION_TITLE_FIELD]: "",
};

const AddSessionModal = ({
  isOpen = false,
  closeModal = () => {},
  columnId = "",
  setColumnId = () => {},
}) => {
  // Form
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(sessionSchema),
    defaultValues: defSchemaVal,
    mode: "onSubmit",
  });

  const dispatch = useDispatch();

  function handleCloseModal() {
    reset();
    closeModal();
    setColumnId(null);
  }

  async function onSubmit(data) {
    const newSession = {
      id: uuidv4(),
      title: data.title,
      exercises: [],
    };
    const reqData = {
      columnId,
      sessions: [newSession],
    };
    console.log(
      "🚀 ~ file: AddExerciseModal.jsx:73 ~ onSubmit ~ reqData:",
      reqData
    );
    dispatch(addSession(reqData));
    handleCloseModal();
  }

  return (
    <BasicModal open={isOpen} handleClose={handleCloseModal}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-[400px]">
        <h2 className="text-center mb-2 font-bold">Add Session</h2>
        <BasicTextBox
          control={control}
          name={SESSION_TITLE_FIELD}
          autoComplete="off"
          placeholder="Session name"
          errors={
            errors[SESSION_TITLE_FIELD]
              ? errors[SESSION_TITLE_FIELD]?.message
              : null
          }
          className="w-full px-4 py-2 outline-none border rounded-md border-secondary 
          focus:border-black focus:text-black transition-all"
          wrapperClass="w-full mb-4"
        />
        <div className="flex justify-center gap-x-2">
          <BasicButton
            type="button"
            onClick={handleCloseModal}
            className="!px-3 !py-2 font-semibold hover:opacity-60"
          >
            Cancel
          </BasicButton>
          <BasicButton
            disabled={!isValid}
            type="submit"
            className={`!px-3 !py-2 bg-primary text-white font-semibold 
            ${!isValid ? "cursor-not-allowed" : "hover:opacity-60"} `}
          >
            Submit
          </BasicButton>
        </div>
      </form>
    </BasicModal>
  );
};

export default AddSessionModal;
