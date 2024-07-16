import AddNote from "./components/AddNote";
import Header from "./components/Header";
import Notes from "./components/Notes";

function App() {
  return (
    <div className="p-8">
      <Header />
      <AddNote />
      <Notes />
    </div>
  );
}

export default App;

