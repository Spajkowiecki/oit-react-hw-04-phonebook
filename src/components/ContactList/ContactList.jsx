import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import style from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList({ contacts, remove }) {
  /*
  ! when adding contact i need to somehow create unique id
  ? the easiest way was to use nanoid()
  */

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

// return element.id === undefined ? (
//   <li key={contacts.length + 1}>
//     <Contact contact={element} />
//     <button onClick={remove}>remove</button>
//   </li>
// ) : (
//   <li key={element.id}>
//     <Contact contact={element} />
//     <button onClick={remove}>remove</button>
//   </li>
// );
