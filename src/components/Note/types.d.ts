import { NoteType } from "../../utils/types";

export type Props = {
  note: NoteType;
  handleEditNote: (id: NoteType) => void;
  handleDeleteNote: (id: string) => void;
};
