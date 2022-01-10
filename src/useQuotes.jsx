import { useContext, useEffect } from "react";
import { AppContext } from "../app-context";

const useQuotes = () => {
  const [state, setState] = useContext(AppContext);

  useEffect(() => {
    filterQuotes();
  }, [state.filterCount, state.quotes]);

  const delete_quotes = () => {
    setState({ ...state, quotes: [], filteredQuotes: [] });
  };

  const load_quote = async () => {
    let resp = await fetch("https://api.kanye.rest");
    let data = await resp.json();
    let { quote } = data;
    let qs = [...state.quotes, quote];

    setState({ ...state, quotes: qs });
  };

  const delete_q = (q) => {
    let f = state.quotes.filter((quote) => {
      return quote !== q;
    });

    setState({ ...state, quotes: f });
  };

  const filterQuotes = () => {
    if (state.filterCount === 1) {
      setState({ ...state, filteredQuotes: state.quotes });
    } else {
      let f = state.quotes.filter((q) => {
        return q.split(" ").length >= state.filterCount;
      });
      setState({ ...state, filteredQuotes: f });
    }
  };

  const changeFilterCount = (value) => {
    setState({ ...state, filterCount: value });
  };

  return {
    quotes: state.quotes,
    filteredQuotes: state.filteredQuotes,
    filterCount: state.filterCount,
    changeFilterCount,
    delete_quotes,
    delete_q,
    load_quote,
  };
};

export default useQuotes;
