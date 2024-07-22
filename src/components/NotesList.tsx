import Note from "./Note";
import { NoteType } from "../utils/types";

type Props = {
  notes: NoteType[];
};

const NotesList = ({ notes }: Props) => {
  return (
    <div className="flex gap-4 my-8 flex-wrap">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
