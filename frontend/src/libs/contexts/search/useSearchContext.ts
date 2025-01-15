import { use } from "react";
import { SearchContext } from "./search.context";

// Too easy to do it
export const useSearchContext = () => {
  const context = use(SearchContext);
  if (!context) {
    throw new Error(
      "useSearchContext must be used within a SearchContextProvider"
    );
  }

  return context;
};
