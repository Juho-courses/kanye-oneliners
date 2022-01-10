import useQuotes from "../useQuotes";
import Quote from "./Quote";

const QuoteList = () => {
  const { filteredQuotes: quotes } = useQuotes();
  if (quotes.length === 0) {
    return (
      <div>
        <p>No quotes!</p>
      </div>
    );
  }
  return (
    <div>
      {quotes.map((q, index) => {
        return <Quote key={index} quote={q} />;
      })}
    </div>
  );
};

export default QuoteList;
