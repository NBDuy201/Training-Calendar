/* eslint-disable react/prop-types */
import { useController } from "react-hook-form";

const BasicTextBox = ({
  name = "",
  defaultValue = "",
  type = "text",
  label,
  control,
  errors,
  className = "",
  labelClass = "",
  wrapperClass = "",
  hideErrMsg = false,
  placeholder = "",
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue,
  });
  const errBorderClass = "!border-red-600";

  return (
    <div
      className={`${
        type === "hidden" ? "hidden" : "flex"
      } flex-col text-slate-400 ${wrapperClass}`}
    >
      <label className={`font-medium text-black ${labelClass}`}>{label}</label>
      {type === "textArea" ? (
        <textarea
          placeholder={placeholder}
          className={`focus:ring-0
          ${className}
          ${errors ? errBorderClass : "border-slate-400"}`}
          {...props}
          {...field}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={`focus:ring-0 
          ${className}
          ${errors ? errBorderClass : "border-slate-400"}`}
          {...props}
          {...field}
        />
      )}
      {!hideErrMsg ? <p className="text-red-600 mt-2">{errors}</p> : null}
    </div>
  );
};

export default BasicTextBox;
