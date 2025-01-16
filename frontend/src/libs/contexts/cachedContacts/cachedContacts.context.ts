import { createContext, Dispatch } from "react";

export const CachedContactsContext = createContext<ContextStateType<
  string,
  Dispatch<string>
> | null>({
  state: "",
  setState: () => {},
});

// Provide better visualization experience in react-dev-tools
CachedContactsContext.displayName = "CachedContactsContext";
