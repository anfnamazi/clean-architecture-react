import { FunctionComponent, lazy, Suspense } from "react";

const DetailsComp = lazy(() => import("../components/Details"));

interface DetailsProps {}

const Details: FunctionComponent<DetailsProps> = () => {
  return (
    <div>
      <Suspense fallback="Loading...">
        <DetailsComp />
      </Suspense>
    </div>
  );
};

export default Details;
