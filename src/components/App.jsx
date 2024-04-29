import PropTypes from 'prop-types';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import style from './App.module.css';
import ContactForm from './ContactForm/ContactForm';

import { useState } from 'react';
import useContacts from 'hooks/useContacts';

export default function App() {
  //? HOOKS
  const { removeContact, addContact, contacts } = useContacts();
  //? STATES
  //filter for searching contacts in array
  const [filter, setFilter] = useState('');

  return (
    <div className={style.App}>
      <h2 className={style.title}>PHONEBOOK</h2>
      <div className={style.content}>
        <Section name="Controls">
          <ContactForm contact={addContact} />
        </Section>
        <Section name="Contacts">
          <Filter value={setFilter} />
          <ContactList
            contacts={contacts.filter(myContact => {
              return (
                myContact.name.toLowerCase().includes(filter.toLowerCase()) ||
                myContact.phone.toLowerCase().includes(filter.toLowerCase()) ||
                myContact.email.toLowerCase().includes(filter.toLowerCase())
              );
            })}
            remove={removeContact}
          />
        </Section>
      </div>
    </div>
  );
}

App.propTypes = {
  filter: PropTypes.string,
};
