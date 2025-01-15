// Using an enumeration instead of a regular string
// can be very effective in letting us know who used it and what they did
export enum SearchActionEnum {
  SET_SEARCH_VALUE = "SET_SEARCH_VALUE",
}

// Our state and dispatch
export interface SearchStateType {
  searchValue: string;
}
