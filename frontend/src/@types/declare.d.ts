type UseCaseType<T> = () => {
  error: Error;
  isPending: boolean;
  data: T;
};
