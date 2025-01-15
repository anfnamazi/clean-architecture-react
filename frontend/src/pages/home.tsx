import SearchInput from "components/SearchInput";
import { SearchProvider } from "libs/contexts/search";
import { FunctionComponent, lazy, Suspense } from "react";

const Contacts = lazy(() => import("components/Contacts"));

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <div>
      <SearchProvider>
        <SearchInput />
        <Suspense fallback="Loading...">
          <Contacts />
        </Suspense>
      </SearchProvider>
    </div>
  );
};

export default Home;
