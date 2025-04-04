import Contact from '../Contact/Contact';
import { nanoid } from 'nanoid';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.listContacts}>
      {contacts.map(contact => (
        <li className={s.itemContact} key={nanoid()}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
