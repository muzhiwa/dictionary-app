import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="Sky" />
        </main>
        <footer className="App-footer">
          <small>Coded by Muzhda Wafa</small>
        </footer>
      </div>
    </div>
  );
}