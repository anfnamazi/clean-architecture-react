import { SearchActionEnum, useSearchContext } from "libs/contexts/search";
import { ChangeEvent, FunctionComponent } from "react";

interface SearchInputProps {}

const SearchInput: FunctionComponent<SearchInputProps> = () => {
  const { state, dispatch } = useSearchContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch({
      type: SearchActionEnum.SET_SEARCH_VALUE,
      payload: { searchValue: value },
    });
  };

  return (
    <div>
      <input
        value={state.searchValue}
        onChange={handleChange}
        placeholder="Search name or phone ..."
      />
    </div>
  );
};

export default SearchInput;
