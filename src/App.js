import "./App.css";
import { News } from "./components/news";

function App() {
  const name = "Adrian";

  return (
    <>
      <h1 className="animated-title">HELLO {name}!</h1>

      <main>
        <News></News>
        <News></News>
        <News></News>
      </main>
    </>
  );
}

export default App;
