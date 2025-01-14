import { FC, memo } from "react";

export function withApi<TProps, TData>(
  Component: FC<TProps & { data: TData }>,
  useCase: UseCaseType<TData>
) {
  function EnhancedComponent(props: TProps) {
    const { data, error, isPending } = useCase();

    if (isPending) {
      return "Loading...";
    }

    if (error) {
      return error.message;
    }

    return <Component {...props} data={data} />;
  }
  return memo(EnhancedComponent);
}
