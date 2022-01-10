import useQuotes from "../useQuotes";

const Counts = () => {
  const { quotes, filteredQuotes } = useQuotes();
  return (
    <div>
      <p>Total quote count: {quotes.length}</p>
      <p>Quotes in view: {filteredQuotes.length}</p>
    </div>
  );
};

export default Counts;
