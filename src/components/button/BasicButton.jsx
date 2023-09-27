/* eslint-disable react/prop-types */

const BasicButton = ({
  type = "button",
  className = "",
  onClick = () => {},
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`border border-secondary p-3 rounded-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default BasicButton;
