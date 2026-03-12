import { useState } from "react";
import { useColor } from "../context/ColorContext";
import { useNotes } from "../hooks/useNotes";
import Note from "./Note";

function NoteBoard() {
  const { defaultColor } = useColor();
  const { notes, addNote, deleteNote } = useNotes();
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleAddNote = () => {
    const possibleError = addNote(text, defaultColor);

    if (possibleError) {
      setError(possibleError);
      return;
    }

    setText("");
    setError("");
  };

  return (
    <div className="board-container">
      <h2>Tablero de Notas</h2>

      <div className="note-form">
        <input
          type="text"
          placeholder="Escribe una nota..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddNote}>Añadir</button>
      </div>

      {error && <p className="error">{error}</p>}

      <p className="counter">
        {notes.length} / 10 notas
      </p>

      <div className="notes-grid">
        {notes.length === 0 ? (
          <p className="empty-message">No hay notas todavía</p>
        ) : (
          notes.map((note) => (
            <Note key={note.id} note={note} onDelete={deleteNote} />
          ))
        )}
      </div>
    </div>
  );
}

export default NoteBoard;