import { FC, ReactNode, useMemo, useReducer } from "react";
import { SearchContext } from "./search.context";

import { searchReducer } from "./search.reducer";

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: FC<SearchProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(
    searchReducer,
    { searchValue: "" },
    (state) => state
  );

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <SearchContext value={value}>{children}</SearchContext>;
};
