interface ContactsRepository {
  getAllContact(): Promise<IContactsResponse>;
  getSingleContact(id: string): Promise<IContactData>;
}

export default ContactsRepository;
