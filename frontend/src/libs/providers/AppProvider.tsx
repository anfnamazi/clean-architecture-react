import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FunctionComponent, ReactNode } from "react";

const queryClient = new QueryClient();

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: FunctionComponent<AppProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default AppProvider;
