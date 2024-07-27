import { NoteType } from "../../utils/types";

export type Props = {
  notes: NoteType[];
  handleEditNote: (note: NoteType) => void;
  handleDeleteNote: (id: string) => void;
};
