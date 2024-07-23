import { useDisclosure } from "@nextui-org/modal";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import { Button } from "@nextui-org/button";
import { NoteType } from "./utils/types";
import { useCallback, useEffect, useState } from "react";
import { getAllNotes } from "./api/notes";
import SearchBar from "./components/SearchBar";
import { IoMdAdd, IoIosSearch } from "react-icons/io";
import AddEditNoteModal from "./components/AddEditNoteModal";

function App() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [currentNote, setCurrentNote] = useState<NoteType | null>(null);

  const fetchAllNotes = useCallback(async () => {
    try {
      const data = await getAllNotes();
      setNotes(data);
    } catch (error) {
      console.log("Error fetchAllNotes: ", error);
    }
  }, []);

  useEffect(() => {
    fetchAllNotes();
  }, [fetchAllNotes]);

  const handleAddModalOpen = () => {
    setMode("add");
    onOpen();
  };

  const handleEditNote = (note: NoteType) => {
    setMode("edit");
    setCurrentNote(note);
    onOpen();
  };

  const handleDeleteNote = (id: string) => {
    console.log(id);
  };

  return (
    <div className="p-8">
      <Header />

      <SearchBar
        searchValue={searchInput}
        onSearchChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search a note"
        className="w-1/2"
        startContent={<IoIosSearch />}
      />

      <Button onPress={handleAddModalOpen} color="primary">
        <IoMdAdd />
        Add note
      </Button>

      <NotesList
        notes={notes}
        handleEditNote={handleEditNote}
        handleDeleteNote={handleDeleteNote}
      />

      {/* MODAL */}
      <AddEditNoteModal
        mode={mode}
        note={currentNote}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
        refresh={fetchAllNotes}
      />
    </div>
  );
}

export default App;

