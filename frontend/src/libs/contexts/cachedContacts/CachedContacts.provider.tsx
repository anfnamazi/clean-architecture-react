import { ContactStorageKeyEnum } from "libs/config/storageKeys";
import { FC, ReactNode, useMemo } from "react";
import { useLocalstorageState } from "rooks";
import { CachedContactsContext } from "./cachedContacts.context";

interface CachedContactsProviderProps {
  children: ReactNode;
}

export const CachedContactsProvider: FC<CachedContactsProviderProps> = ({
  children,
}) => {
  const [state, setState] = useLocalstorageState<string>(
    ContactStorageKeyEnum.CACHED
  );

  const value = useMemo(
    () => ({ state: state ?? "[]", setState }),
    [state, setState]
  );

  return (
    <CachedContactsContext value={value}>{children}</CachedContactsContext>
  );
};
