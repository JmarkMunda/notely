import { useDisclosure } from "@nextui-org/modal";
import { NoteType } from "./utils/types";
import { useCallback, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { toast } from "react-toastify";
import { categories } from "./utils/constants";
import { deleteNote, getAllNotes } from "./api/notes";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import SearchBar from "./components/SearchBar";
import AddEditNoteModal from "./components/AddEditNoteModal";
import Fab from "./components/Fab";
import Categories from "./components/Categories";

function App() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [currentNote, setCurrentNote] = useState<NoteType | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

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

  const handleDeleteNote = async (id: string) => {
    try {
      await deleteNote(id);
      toast.success("Deleted");
      fetchAllNotes();
    } catch (error) {
      console.log("Error handleDeleteNote: ", error);
    }
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="py-8 px-8 lg:px-14 md:px-10">
      <Header />

      <SearchBar
        searchValue={searchInput}
        onSearchChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search a note"
        className="w-1/2"
        startContent={<IoIosSearch />}
      />

      <div className="items-center">
        {/* NOTES BUTTON */}
        <p className="text-lg font-bold mb-2 mt-4">Your Notes</p>

        {/* CATEGORIES BUTTONS */}
        <Categories
          categories={categories}
          selectedCategory={activeCategory}
          onItemClick={handleCategoryClick}
        />
      </div>

      <NotesList
        notes={notes}
        handleEditNote={handleEditNote}
        handleDeleteNote={handleDeleteNote}
      />

      {/* FAB */}
      <Fab title="Add Note" onClick={handleAddModalOpen} />

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

