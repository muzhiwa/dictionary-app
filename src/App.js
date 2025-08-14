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
          <small>
            This project was coded by Muzhda Wafa and is{" "}
              <a
               href="https://github.com/muzhiwa/dictionary-app"
               target="_blank"
               rel="noopener noreferrer"
              >
               open-sourced
              </a>{" "}
            on GitHub and hosted on{" "}
              <a
                href="https://muzhda-dictionary-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
              Netlify
              </a>
          </small>
        </footer>
      </div>
    </div>
  );
}