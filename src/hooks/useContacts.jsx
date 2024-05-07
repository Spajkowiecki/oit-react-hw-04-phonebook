import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function useContacts(filter) {
  const [contacts, setContacts] = useState([]);
  //removed unused variable 'contact'
  const [contact, setContact] = useState({});

  useEffect(() => {
    //check if there is something in localStorage
    const checkLocalStorage = () => {
      const storage = JSON.parse(localStorage.getItem('contacts'));

      console.log('found something inside!:\n', storage);
      setContacts(storage);
    };
    console.log('useEffect: before checkLocalStorage');
    checkLocalStorage();
    //! for preventing calling 'checkLocalStorage' every contacts update
    //can't give contacts to table brackets because its cause infinity loop
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const removeContact = contact => {
    //console.log(contact.target);
    const contactObject = parseInt(contact.target.parentNode.id);
    //console.log('contactObject: ', contactObject);
    //console.log(contacts[contactObject]);
    const remContact = contacts.filter(c => {
      return c.id !== contactObject;
    });

    setContacts(remContact);
  };

  const addContact = contact => {
    //! adding ID to make contact better to identify:
    const newContact = { id: contacts.length, ...contact };
    setContact(newContact);
    const tempArray = contacts.filter(e => {
      return contact.phone === e.phone || contact.email === e.email;
    });
    if (tempArray.length > 0) {
      return alert('This contact already exists, change number or email');
    }
    setContacts(prev => [...prev, newContact]);
  };

  const findContact = () => {
    contacts.filter(myContact => {
      return (
        myContact.name.toLowerCase().includes(filter.toLowerCase()) ||
        myContact.phone.toLowerCase().includes(filter.toLowerCase()) ||
        myContact.email.toLowerCase().includes(filter.toLowerCase())
      );
    });
  };

  return { removeContact, setContacts, addContact, findContact, contacts };
}

useContacts.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(PropTypes.object),
  contact: PropTypes.object,
};
