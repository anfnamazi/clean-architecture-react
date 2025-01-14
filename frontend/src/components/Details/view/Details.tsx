import { withUseCase } from "libs/HOC/withUseCase";
import { useCaseDetailsContacts } from "../useCases";

const Details = withUseCase(({ data }) => {
  return (
    <div>
      {data.map(([k, v]) => (
        <div key={k}>{`${k}: ${v}`}</div>
      ))}
    </div>
  );
}, useCaseDetailsContacts);

export default Details;
