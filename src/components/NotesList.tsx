import Note from "./Note";
import { NoteType } from "../utils/types";

type Props = {
  notes: NoteType[];
  handleEditNote: (note: NoteType) => void;
  handleDeleteNote: (id: string) => void;
};

const NotesList = ({ notes, handleEditNote, handleDeleteNote }: Props) => {
  return (
    <div className="flex gap-4 my-8 flex-wrap">
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleEditNote={handleEditNote}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
    </div>
  );
};

export default NotesList;
