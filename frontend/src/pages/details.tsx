import { FunctionComponent, lazy, Suspense } from "react";

const DetailsComponent = lazy(() => import("components/Details"));

interface DetailsProps {}

const Details: FunctionComponent<DetailsProps> = () => {
  return (
    <div>
      <Suspense fallback="Loading...">
        <DetailsComponent />
      </Suspense>
    </div>
  );
};

export default Details;
