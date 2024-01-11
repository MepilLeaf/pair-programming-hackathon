import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DisplayedNote from "./pages/DisplayedNote/DisplayedNote"
import './App.scss';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DisplayedNote />} />
          <Route path='/notes/:noteId' element={<DisplayedNote />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
