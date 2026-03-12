import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useNotes = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text, color) => {
    if (!text.trim()) return "La nota no puede estar vacía";
    if (notes.length >= 10) return "No puedes tener más de 10 notas";

    const newNote = {
      id: uuidv4(),
      text: text.trim(),
      color,
    };

    setNotes([...notes, newNote]);
    return null;
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return { notes, addNote, deleteNote };
};