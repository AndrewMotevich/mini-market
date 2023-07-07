import React, { ReactNode } from "react";
import classes from "./ModalWindow.module.scss";
type props = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  children: ReactNode;
};

const ModalWindow = (props: props) => {
  return (
    <div
      style={props.visible ? { visibility: "visible" } : { visibility: "hidden" }}
      className={classes.modalWrapper}
      onClick={(e) => {
        e.stopPropagation();
        props.setVisible(false);
      }}
    >
      <div
        className={classes.modalWindow}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div
          className={classes.modalWindowCross}
          onClick={() => {
            props.setVisible(false);
          }}
        ></div>
        {props.children}
      </div>
    </div>
  );
};

export default ModalWindow;
