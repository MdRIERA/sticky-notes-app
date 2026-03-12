import { ColorProvider } from "./context/ColorContext";
import ColorSelector from "./components/ColorSelector";
import NoteBoard from "./components/NoteBoard";

function App() {
  return (
    <ColorProvider>
      <div className="app">
        <h1>Notas Adhesivas</h1>
        <ColorSelector />
        <NoteBoard />
      </div>
    </ColorProvider>
  );
}

export default App;