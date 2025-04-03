import { useState } from 'react';
import ContactList from './components/ContactList/ContactList';
import contactsArray from './contact.json';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const [contacts, setContacts] = useState(contactsArray);
  const [filter, setFilter] = useState('');
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  const addContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox value={filter} onChange={setFilter} />
        <ContactList contacts={filteredContacts} onDelete={deleteContact} />
      </div>
    </>
  );
}

export default App;
