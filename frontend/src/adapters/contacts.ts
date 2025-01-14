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
}

export default ContactsApiAdapter;
