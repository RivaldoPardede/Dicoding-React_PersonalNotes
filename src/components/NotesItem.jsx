/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { showFormattedDate } from "../utils/index";
import ActionButton from "./ActionButton";

const NotesItem = ({
  id,
  title,
  createdAt,
  body,
  archived,
  onDelete,
  onArchive,
}) => {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <ActionButton id={id} action={onDelete} desc="Delete" />
        <ActionButton
          id={id}
          action={onArchive}
          desc={archived ? "Pindahkan" : "Arsipkan"}
        />
      </div>
    </div>
  );
};

export default NotesItem;
