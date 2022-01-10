import { createContext, useState } from "react";

const AppContext = createContext([{}, () => {}]);

const AppProvider = ({ children }) => {
  const quotes = [
    "lainaus1",
    "1 2",
    "1 2 3",
    "asd lkasldk 12312 asldkasd lwekqkl",
    "yksi",
  ];

  const [state, setState] = useState({
    quotes: [],
    filteredQuotes: [],
    filterCount: 1,
  });

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
