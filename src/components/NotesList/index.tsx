import Note from "../Note";
import { Props } from "./types";

const NotesList = ({ notes, handleEditNote, handleDeleteNote }: Props) => {
  if (notes.length === 0)
    return (
      <div className="flex flex-col flex-1 justify-center items-center my-10">
        <img
          src={"/empty_notes.svg"}
          alt="empty_notes"
          className="w-1/2 h-[300px]"
        />

        <p className="mt-8 font-bold text-gray-500">Empty notes list</p>
        <p className="text-gray-500">
          Looks like you have no notes. Start writing one!
        </p>
      </div>
    );

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
