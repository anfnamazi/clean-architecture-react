interface IRoute {
  path: string;
  url?: (id: number) => string;
}

interface IContactData {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  phone: string;
  note: string;
  telegram: string;
  avatar: string;
  company: string;
  address: null;
  createdAt: number;
  updatedAt: number;
  id: number;
}

interface IMetaData {
  skipped: number;
  limit: number;
  total: number;
  criteria: Record<string, unknown>;
}

interface IContactsResponse {
  meta: IMetaData;
  items: IContactData[];
}

interface ICard {
  id: number;
  name: string;
  phone: string;
  avatar: string;
}
