import { useQuery } from "@tanstack/react-query";
import ContactsApiAdapter from "adapters/contacts";
import { ContactQueryKeyEnum } from "libs/config/queryKeys";
import { ICard } from "../types";

const useCardContacts: UseCaseType<ICard[]> = () => {
  const contactAdapter = new ContactsApiAdapter();

  const { isPending, error, data } = useQuery<IContactsResponse>({
    queryKey: [ContactQueryKeyEnum.LIST],
    queryFn: contactAdapter.getAllContact,
  });

  const cards: ICard[] = data?.items?.map((c) => {
    return {
      id: c.id,
      avatar: c.avatar,
      name: `${c.first_name} ${c.last_name}`,
      phone: c.phone,
    };
  });

  return { isPending, error, data: cards };
};

export default useCardContacts;
