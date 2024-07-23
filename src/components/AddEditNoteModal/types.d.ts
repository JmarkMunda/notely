import { NoteType } from "../../utils/types";

export type Props = {
  mode: "add" | "edit";
  note: NoteType | null;
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
  refresh: () => void;
};
