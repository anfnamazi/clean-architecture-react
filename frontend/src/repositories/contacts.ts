interface ContactsRepository {
  getAllContact(): Promise<IContactsResponse>;
}

export default ContactsRepository;
