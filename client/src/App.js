import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoteDisplay from "./components/NotesDisplay/NoteDisplay"
import './App.scss';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/notes/:noteId' element={NoteDisplay} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
