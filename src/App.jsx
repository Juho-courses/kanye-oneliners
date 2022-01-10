import "./App.css";
import Counts from "./components/Counts";
import Filter from "./components/Filter";
import QuoteList from "./components/QuotesList";
import useQuotes from "./useQuotes";

function App() {
  const { delete_quotes, load_quote } = useQuotes();

  return (
    <div className="App">
      <h1>Kanye oneliners</h1>
      <Counts />
      <Filter />
      <div>
        <button onClick={load_quote}>Load quote</button>
        <button onClick={delete_quotes}>Delete all quotes</button>
      </div>
      <QuoteList />
    </div>
  );
}

export default App;
