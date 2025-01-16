import { use } from "react";
import { CachedContactsContext } from "./cachedContacts.context";

// Too easy to do it
export const useCachedContactsContext = () => {
  const context = use(CachedContactsContext);
  if (!context) {
    throw new Error(
      "useCachedContactsContext must be used within a CachedContactsContextProvider"
    );
  }

  return context;
};
