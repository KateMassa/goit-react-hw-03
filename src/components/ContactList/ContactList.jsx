import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map((contact) => (
      <Contact key={contact.id} {...contact} onDelete={onDelete} />
    ))}
  </ul>
);

export default ContactList;