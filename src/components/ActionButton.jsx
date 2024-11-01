/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ActionButton = ({ id, action, desc }) => {
  return (
    <button
      className={
        desc === "Delete"
          ? "note-item__delete-button"
          : "note-item__archive-button"
      }
      onClick={() => action(id)}
    >
      {desc}
    </button>
  );
};

export default ActionButton;
