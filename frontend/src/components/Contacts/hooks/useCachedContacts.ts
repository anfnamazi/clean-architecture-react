import { ICard } from "components/shared";
import { useCachedContactsContext } from "libs/contexts/cachedContacts";

const useCachedContacts = () => {
  const { state, setState } = useCachedContactsContext();

  const handleInsertion = (newCard: ICard) => {
    const cached: ICard[] = JSON.parse(state);
    if (cached.length === 4) {
      cached.shift();
    }
    cached.push(newCard);
    const stringCached = JSON.stringify(cached);
    setState(stringCached);
  };

  return { handleInsertion };
};

export default useCachedContacts;
