import AddNote from "./components/AddNote";
import Header from "./components/Header";
import NotesList from "./components/NotesList";

function App() {
  return (
    <div className="p-8">
      <Header />
      <AddNote />
      <NotesList />
    </div>
  );
}

export default App;

