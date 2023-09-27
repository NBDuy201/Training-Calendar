/* eslint-disable react/prop-types */

const BasicButton = ({
  type = "button",
  className = "",
  onClick = () => {},
  disabled = false,
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`border border-secondary p-3 rounded-md 
      ${disabled ? "opacity-50" : ""}
      ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default BasicButton;
