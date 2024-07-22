import { useEffect, useState } from "react";
import { getAllNotes } from "../api/notes";
import Note from "./Note";
import { NoteType } from "../utils/types";

const NotesList = () => {
  const [notes, setNotes] = useState<NoteType[]>([]);

  const fetchAllNotes = async () => {
    try {
      const data = await getAllNotes();
      console.log("DATA: ", data);
      setNotes(data);
    } catch (error) {
      console.log("Error fetchAllNotes: ", error);
    }
  };

  useEffect(() => {
    fetchAllNotes();
  }, []);

  return (
    <div className="flex gap-4 my-8">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
