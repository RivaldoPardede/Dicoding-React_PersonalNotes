/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const NotesHeader = ({ onSearch }) => {
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan ..."
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default NotesHeader;
