import { useQuery } from "@tanstack/react-query";
import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { ContactQueryKeyEnum } from "../../@types/enum";
import { contactUrl } from "../../libs/constructors";

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
