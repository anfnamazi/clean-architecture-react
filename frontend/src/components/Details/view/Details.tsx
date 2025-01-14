import { withApi } from "libs/HOC/withApi";
import { useCaseDetailsContacts } from "../useCases";

const Details = withApi(({ data }) => {
  return (
    <div>
      {data.map(([k, v]) => (
        <div key={k}>{`${k}: ${v}`}</div>
      ))}
    </div>
  );
}, useCaseDetailsContacts);

export default Details;
