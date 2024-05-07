import PropTypes from 'prop-types';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import style from './App.module.css';
import ContactForm from './ContactForm/ContactForm';

import { useState } from 'react';
import useContacts from 'hooks/useContacts';
import useFilter from 'hooks/useFilter';

export default function App() {
  //? HOOKS
  const { filter, setFilter, FilterContacts } = useFilter();
  const { removeContact, addContact, contacts } = useContacts(filter);
  //? STATES
  //filter for searching contacts in array

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
            contacts={FilterContacts(contacts)}
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
