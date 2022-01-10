import useQuotes from "../useQuotes";

const Quote = ({ quote }) => {
  const { delete_q } = useQuotes();
  return (
    <div>
      <span>{quote}</span>
      <button onClick={(e) => delete_q(quote)}>delete</button>
    </div>
  );
};

export default Quote;
