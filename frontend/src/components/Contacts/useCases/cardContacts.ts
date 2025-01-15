import { useQuery } from "@tanstack/react-query";
import ContactsApiAdapter from "adapters/contacts";
import { ContactQueryKeyEnum } from "libs/config/queryKeys";
import { useSearchContext } from "libs/contexts/search";
import { ICard } from "../types";

const useCardContacts: UseCaseType<ICard[]> = () => {
  const contactAdapter = new ContactsApiAdapter();

  const { state } = useSearchContext();

  const { isPending, error, data } = useQuery<IContactsResponse>({
    queryKey: [ContactQueryKeyEnum.LIST, state.searchValue],
    queryFn: () => contactAdapter.getFilteredContact(state.searchValue),
  });

  const cards: ICard[] = data?.items?.map((c) => {
    return {
      id: c.id,
      avatar: c.avatar,
      name: `${c.first_name} ${c.last_name}`,
      phone: c.phone,
      address: c.address,
    };
  });

  return { isPending, error, data: cards };
};

export default useCardContacts;
