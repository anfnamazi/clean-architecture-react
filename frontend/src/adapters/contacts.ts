import { FilterParams, FilterQuery } from "libs/config/classes";
import { contactUrl } from "libs/config/constructors";
import ContactsRepository from "repositories/contacts";

class ContactFilterQuery implements IContactFilterQuery {
  first_name: IFilterQuery;
  phone: IFilterQuery;

  init(searchedString: string) {
    const filterQuery = new FilterQuery();
    filterQuery.init(searchedString);

    if (+searchedString) {
      this.phone = filterQuery;
    } else {
      this.first_name = filterQuery;
    }
  }
}

class ContactsApiAdapter implements ContactsRepository {
  async getAllContact(): Promise<IContactsResponse> {
    const response = await fetch(contactUrl);
    return response.json();
  }

  async getSingleContact(id: string): Promise<IContactData> {
    const response = await fetch(`${contactUrl}/${id}`);
    return response.json();
  }

  async getFilteredContact(searchedString: string): Promise<IContactsResponse> {
    if (!searchedString) {
      return this.getAllContact();
    }

    const contactFilterQuery = new ContactFilterQuery();
    contactFilterQuery.init(searchedString);

    const filterParams = new FilterParams<IContactFilterQuery>();
    filterParams.init(contactFilterQuery, "createdAt DESC");

    const stringParams = new URLSearchParams(
      filterParams.toString()
    ).toString();

    const response = await fetch(`${contactUrl}/?${stringParams}`);
    return response.json();
  }
}

export default ContactsApiAdapter;
