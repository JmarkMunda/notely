import { useCallback, useEffect, useState } from "react";
import { deleteNote, getAllNotes } from "../api/notes";
import { NoteType } from "../utils/types";
import { useDisclosure } from "@nextui-org/modal";
import { toast } from "react-toastify";
import { SortType } from "../components/SelectDate/types";

const useNotes = () => {
  //   Modal
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [mode, setMode] = useState<"add" | "edit">("add");
  //   Notes
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [currentNote, setCurrentNote] = useState<NoteType | null>(null);
  // Filters
  const [activeCategory, setActiveCategory] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [sortBy, setSortBy] = useState<SortType>("desc");

  const fetchAllNotes = useCallback(
    async (search: string, sortBy: string, category: string) => {
      try {
        const data = await getAllNotes(search, sortBy, category);
        setNotes(data);
      } catch (error) {
        console.log("Error fetchAllNotes: ", error);
      }
    },
    []
  );

  // Initialize fetch
  useEffect(() => {
    if (!searchInput) {
      fetchAllNotes("", sortBy, "");
    }
  }, [fetchAllNotes, searchInput, sortBy]);

  //   EVENT HANDLERS
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
      fetchAllNotes(searchInput, sortBy, activeCategory);
    } catch (error) {
      console.log("Error handleDeleteNote: ", error);
    }
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    fetchAllNotes(searchInput, sortBy, category);
  };

  const handleSortChange = (value: "asc" | "desc") => {
    setSortBy(value);
    fetchAllNotes(searchInput, value, activeCategory);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchInput(e.target.value);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchInput) return;
    fetchAllNotes(searchInput, sortBy, activeCategory);
  };

  return {
    notes,
    currentNote,
    searchInput,
    sortBy,
    activeCategory,
    mode,
    isOpen,
    onOpenChange,
    onClose,
    fetchAllNotes,
    handleAddModalOpen,
    handleEditNote,
    handleDeleteNote,
    handleCategoryClick,
    handleSortChange,
    handleSearchChange,
    handleSearchSubmit,
  };
};

export default useNotes;
