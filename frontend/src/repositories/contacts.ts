interface ContactsRepository {
  getAllContact(): Promise<IContactsResponse>;
  getSingleContact(id: string): Promise<IContactData>;
  getFilteredContact(searchedString: string): Promise<IContactsResponse>;
}

export default ContactsRepository;
