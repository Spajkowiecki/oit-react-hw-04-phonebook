import PropTypes from 'prop-types';

import style from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { removeContact } from '../../redux/reducers';

import { useDispatch, useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(stateGlobal => {
    return stateGlobal.phonebook.contacts;
  });

  const filter = useSelector(stateGlobal => {
    return stateGlobal.phonebookFilter.filter;
  });

  const filteredContacts = contacts.filter(filteredContacts => {
    return (
      filteredContacts.name.toLowerCase().includes(filter.toLowerCase()) ||
      filteredContacts.number.toLowerCase().includes(filter.toLowerCase()) ||
      filteredContacts.email.toLowerCase().includes(filter.toLowerCase())
    );
  });

  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeContact(id));
  };

  return (
    <ul className={style.list}>
      {filteredContacts.map(element => {
        return (
          //! each child will have unique key from:
          <li id={element.id} key={element.id}>
            <Contact contact={element}>
              <button>edit</button>
              <button onClick={() => handleRemove(element.id)}>remove</button>
            </Contact>
          </li>
        );
      })}
    </ul>
  );
}
