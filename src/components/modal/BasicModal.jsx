/* eslint-disable react/prop-types */
import { Dialog } from "@mui/material";
import Transition from "./Transition";
import BasicButton from "../Button/BasicButton";
import { FaWindowClose } from "react-icons/fa";

const BasicModal = ({
  open,
  handleClose = () => {},
  clickOutside = handleClose,
  fullWidth = false,
  maxWidth = "600px",
  padding = "40px",
  haveCloseBtn = false,
  handleCloseBtnClick = handleClose,
  wrapperClassName = "",
  children,
}) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={clickOutside}
      fullWidth={fullWidth}
      maxWidth="lg"
      PaperProps={{
        style: {
          zIndex: 7,
          position: "relative",
          boxShadow: "none",
          padding: padding,
          maxWidth: maxWidth,
          borderRadius: "0.375rem",
          // overflowX: "hidden",
        },
      }}
    >
      <div className="relative bg-inherit">
        {haveCloseBtn ? (
          <BasicButton
            type="button"
            icon={<FaWindowClose className="text-xl" />}
            className="!p-0 absolute -top-0 -right-0 text-gray-400 hover:opacity-50"
            onClick={handleCloseBtnClick}
          />
        ) : null}

        {haveCloseBtn ? (
          <div className={`mt-4 ${wrapperClassName}`}>{children}</div>
        ) : (
          children
        )}
      </div>
    </Dialog>
  );
};

export default BasicModal;
