import { useState, useEffect } from 'react';
import ContactList from './components/ContactList/ContactList';
import contactsArray from './contact.json';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import s from './App.module.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('saved-contacts');
    return savedContacts ? JSON.parse(savedContacts) : contactsArray;
  });
  const [filter, setFilter] = useState('');
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);
  const addContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };

  return (
    <>
      <div className={s.container}>
        <h1 className={s.mainTitle}>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox value={filter} onChange={setFilter} />
        <ContactList contacts={filteredContacts} onDelete={deleteContact} />
      </div>
    </>
  );
}

export default App;
