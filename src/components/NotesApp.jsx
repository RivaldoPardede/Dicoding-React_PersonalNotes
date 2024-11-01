/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { getInitialData } from "../utils/index";
import NotesHeader from "./NotesHeader";
import NotesBody from "./NotesBody";

const NotesApp = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [searchKeyword, setSearchKeyword] = useState("");

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const archiveNote = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? { ...note, archived: !note.archived }
          : note
      )
    );
  };

  const onSearchChange = (keyword) => {
    setSearchKeyword(keyword);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <>
      <NotesHeader onSearch={onSearchChange} />
      <NotesBody
        notes={filteredNotes}
        addNote={addNote}
        deleteNote={deleteNote}
        archiveNote={archiveNote}
      />
    </>
  );
};

export default NotesApp;
