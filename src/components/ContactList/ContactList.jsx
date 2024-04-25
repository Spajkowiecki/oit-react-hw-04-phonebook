import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

import Contact from '../Contact/Contact';

class ContactList extends Component {
  handleRemove = element => {
    this.props.remove(element);
  };
  render() {
    const { contacts } = this.props;
    return (
      <ul className={style.list}>
        {contacts.map(element => {
          return (
            <li key={element.id}>
              <Contact contact={element} />
              <button onClick={() => this.handleRemove(element)}>remove</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};

export default ContactList;
