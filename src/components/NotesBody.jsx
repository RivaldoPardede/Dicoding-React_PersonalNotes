/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import NotesInput from "./NotesInput";
import NotesList from "./NotesList";

const NotesBody = ({ notes, addNote, deleteNote, archiveNote }) => {
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div className="note-app__body">
      <NotesInput addNote={addNote} />

      <h2>Catatan Aktif</h2>
      {activeNotes.length ? (
        <NotesList
          notes={activeNotes}
          onDelete={deleteNote}
          onArchive={archiveNote}
        />
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}

      <h2>Arsip</h2>
      {archivedNotes.length ? (
        <NotesList
          notes={archivedNotes}
          onDelete={deleteNote}
          onArchive={archiveNote}
        />
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </div>
  );
};

export default NotesBody;
