import "boxicons/css/boxicons.min.css";
import "./App.css";
import Details from "./components/Details";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import EmptyNotes from "./components/EmptyNotes";
import SearchBar from "./components/SearchBar";

function App() {
  const { notes ,query} = useSelector((state) => {
    return state;
  });
  const filterNote = notes.filter((note) =>
    note.title.toLowerCase().includes(query.toLowerCase()) 
  );
  return (
    <div className="container mx-auto pb-5  px-2   w-full min-h-full   ">
      <Header />
      <SearchBar />

      {filterNote.length ? <Details  filterNote={filterNote} /> : <EmptyNotes />}
    </div>
  );
}

export default App;
