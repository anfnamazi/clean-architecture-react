import { FunctionComponent, lazy, Suspense } from "react";

const Contacts = lazy(() => import("domains/Contacts"));

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <div>
      <Suspense fallback="Loading...">
        <Contacts />
      </Suspense>
    </div>
  );
};

export default Home;
