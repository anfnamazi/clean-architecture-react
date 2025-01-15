import { SearchActionEnum, SearchStateType } from "./types";

export const searchReducer = (
  state: SearchStateType,
  action: ActionType<SearchActionEnum, SearchStateType>
): SearchStateType => {
  switch (action.type) {
    case SearchActionEnum.SET_SEARCH_VALUE: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default: {
      throw new Error(`Unknown type: ${action.type}`);
    }
  }
};
