import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      {contacts.map(contact => (
        <div key={contact.id} className='contact-card'>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
