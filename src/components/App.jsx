import { useState } from 'react';
import shortid from 'shortid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './Container/Container';
import { useLocalStorage } from './hooks/useLocalStorage';

const defaultList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', defaultList);
  const [filter, setFilter] = useState('');

  const getContacts = data => {
    const newContact = {
      ...data,
      id: shortid.generate(),
    };
    const isDublicate = contacts.find(
      el => el.name.toLowerCase() === data.name.toLowerCase()
    );
    if (isDublicate)
      return alert(`The contact "${data.name}" is in the contact list`);
    else setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(el => el.id !== id));
  };

  const filterContacts = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm getContacts={getContacts} />

      <h2>Contacts</h2>
      <Filter onChange={filterContacts} value={filter} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </Container>
  );
};
