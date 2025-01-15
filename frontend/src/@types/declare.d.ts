type UseCaseType<T> = () => {
  error: Error;
  isPending: boolean;
  data: T;
};

interface ContextType<TState, TAction> {
  state: TState;
  dispatch: (action: TAction) => void;
}

interface ActionType<EAction, TState> {
  type: EAction;
  payload: Partial<TState>;
}
