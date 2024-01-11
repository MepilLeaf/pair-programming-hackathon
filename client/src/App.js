import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayedNote from "./pages/DisplayedNote/DisplayedNote";
import "./App.scss";
import NotesList from "./components/NotesList/NotesList";

function App() {
  return (
    <main>
      <NotesList />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayedNote />} />
          <Route path="/notes/:noteId" element={<DisplayedNote />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
