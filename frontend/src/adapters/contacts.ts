import { FilterParams } from "libs/config/classes";
import { contactUrl } from "libs/config/constructors";
import ContactsRepository from "repositories/contacts";

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

    const filterParams = new FilterParams();
    filterParams.create(searchedString, "createdAt DESC");

    const stringParams = new URLSearchParams(
      filterParams.toString()
    ).toString();

    const response = await fetch(`${contactUrl}/?${stringParams}`);
    return response.json();
  }
}

export default ContactsApiAdapter;
