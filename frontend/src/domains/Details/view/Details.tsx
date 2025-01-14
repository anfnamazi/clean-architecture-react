import { useQuery } from "@tanstack/react-query";
import { contactUrl } from "libs/config/constructors";
import { ContactQueryKeyEnum } from "libs/config/queryKeys";
import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

interface DetailsProps {}

const Details: FunctionComponent<DetailsProps> = () => {
  const { id } = useParams();

  const { isPending, error, data } = useQuery<IContactData>({
    queryKey: [ContactQueryKeyEnum.SINGLE],
    queryFn: () => fetch(`${contactUrl}/${id}`).then((res) => res.json()),
  });

  if (isPending) {
    return "Loading...";
  }

  if (error) {
    return error.message;
  }

  return (
    <div>
      {Object.entries(data).map(([k, v]) => (
        <div key={k}>{`${k}: ${v}`}</div>
      ))}
    </div>
  );
};

export default Details;
