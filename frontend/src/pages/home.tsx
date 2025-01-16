import RecentContact from "components/RecentContacts";
import SearchInput from "components/SearchInput";
import { CachedContactsProvider } from "libs/contexts/cachedContacts";
import { SearchProvider } from "libs/contexts/search";
import { FunctionComponent, lazy, Suspense } from "react";

const Contacts = lazy(() => import("components/Contacts"));

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <div>
      <SearchProvider>
        <SearchInput />
        <div>Recent visited</div>
        <CachedContactsProvider>
          <RecentContact />
          <hr />
          <div>Contact List</div>
          <Suspense fallback="Loading...">
            <Contacts />
          </Suspense>
        </CachedContactsProvider>
      </SearchProvider>
    </div>
  );
};

export default Home;
