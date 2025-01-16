import { createContext } from "react";
import { SearchActionEnum, SearchStateType } from "./types";

export const SearchContext = createContext<ContextReducerType<
  SearchStateType,
  ReducerActionType<SearchActionEnum, SearchStateType>
> | null>({
  state: { searchValue: "" },
  dispatch: () => {},
});

// Provide better visualization experience in react-dev-tools
SearchContext.displayName = "SearchContext";
