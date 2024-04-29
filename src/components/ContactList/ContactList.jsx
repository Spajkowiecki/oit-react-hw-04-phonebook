import PropTypes from 'prop-types';

import style from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList({ contacts, remove }) {
  return (
    <ul className={style.list}>
      {contacts.map(element => {
        return (
          //! each child will have unique key from:
          <li id={element.id} key={element.id}>
            <Contact contact={element} />
            <button onClick={remove}>remove</button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
