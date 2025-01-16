import { ICard } from "components/shared";
import { useCachedContactsContext } from "libs/contexts/cachedContacts";

const useCachedContacts = () => {
  const { state } = useCachedContactsContext();

  const cachedContact: ICard[] = JSON.parse(state);

  return { cachedContact };
};

export default useCachedContacts;
