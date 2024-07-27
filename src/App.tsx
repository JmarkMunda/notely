import { IoIosSearch } from "react-icons/io";
import { categories } from "./utils/constants";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import SearchBar from "./components/SearchBar";
import AddEditNoteModal from "./components/AddEditNoteModal";
import Fab from "./components/Fab";
import Categories from "./components/Categories";
import useNotes from "./hooks/useNotes";
import SelectDate from "./components/SelectDate";

function App() {
  const {
    notes,
    currentNote,
    searchInput,
    sortBy,
    activeCategory,
    mode,
    isOpen,
    onClose,
    onOpenChange,
    fetchAllNotes,
    handleAddModalOpen,
    handleEditNote,
    handleDeleteNote,
    handleCategoryClick,
    handleSearchChange,
    handleSearchSubmit,
    handleSortChange,
  } = useNotes();

  return (
    <div className="py-8 px-8 lg:px-14 md:px-10">
      {/* HEADER */}
      <Header title="Notely" subtitle="Start taking notes!" />
      {/* SEARCH */}
      <SearchBar
        searchValue={searchInput}
        onSearchChange={handleSearchChange}
        handleSearchSubmit={handleSearchSubmit}
        placeholder="Search a note"
        className="w-1/2"
        startContent={<IoIosSearch />}
      />
      <div className="items-center">
        {/* NOTES BUTTON */}
        <p className="text-lg font-bold mb-2 mt-4">Your Notes</p>
        <div className="flex flex-1 justify-between">
          {/* CATEGORIES BUTTONS */}
          <Categories
            categories={categories}
            selectedCategory={activeCategory}
            onItemClick={handleCategoryClick}
          />
          {/* SORT BY */}
          <SelectDate sortBy={sortBy} handleSortChange={handleSortChange} />
        </div>
      </div>
      {/* NOTES LIST */}
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
        refresh={() => fetchAllNotes(searchInput, sortBy, activeCategory)}
      />
    </div>
  );
}

export default App;

