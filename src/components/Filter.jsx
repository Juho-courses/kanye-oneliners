import useQuotes from "../useQuotes";

const Filter = () => {
  const { filterCount, changeFilterCount } = useQuotes();
  return (
    <div>
      <p>Word count filter:</p>
      <input
        type="number"
        min={1}
        value={filterCount}
        onChange={(e) => {
          if (e.target.value < 1) {
            e.target.value = 1;
            return;
          }
          changeFilterCount(e.target.value);
        }}
      />
    </div>
  );
};

export default Filter;
