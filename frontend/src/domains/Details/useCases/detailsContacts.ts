import { useQuery } from "@tanstack/react-query";
import ContactsApiAdapter from "adapters/contacts";
import { ContactQueryKeyEnum } from "libs/config/queryKeys";
import { useParams } from "react-router-dom";
import { Details } from "../types";

const useDetailsContacts: UseCaseType<Details<IContactData>> = () => {
  const { id } = useParams();
  const contactAdapter = new ContactsApiAdapter();

  const { isPending, error, data } = useQuery<IContactData>({
    queryKey: [ContactQueryKeyEnum.LIST],
    queryFn: () => contactAdapter.getSingleContact(id),
  });

  const cards = Object.entries(data) as Details<IContactData>;

  return { isPending, error, data: cards };
};

export default useDetailsContacts;
