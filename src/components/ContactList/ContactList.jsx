import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={s.listContacts}>
      {contacts.map(contact => (
        <div className={s.itemContact} key={contact.id}>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
