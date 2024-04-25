import { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
//styles
import style from './App.module.css';
import ContactForm from './ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  /**
   *  after componentMount check if in localStorage is something saved
   * YES: load data,
   * NO: user must create his own data
   */
  componentDidMount() {
    console.log('checking for contacts in local storage');
    const tempArray = JSON.parse(localStorage.getItem('contacts'));
    if (tempArray == null) {
      console.log('No contacts in local storage');
      return;
    }
    this.setState({ contacts: tempArray });
  }

  componentDidCatch;

  componentDidUpdate() {
    const { contacts } = this.state;
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  addContact = contact => {
    const { contacts } = this.state;

    const contactExist = contacts.filter(myContacts => {
      return (
        myContacts.name.toLowerCase().includes(contact.name.toLowerCase()) ||
        myContacts.phone.toLowerCase().includes(contact.phone.toLowerCase()) ||
        myContacts.email.toLowerCase().includes(contact.email.toLowerCase())
      );
    });

    if (contactExist.length > 0) {
      return alert('Contact already exist!');
    }

    contact.id = contacts.length;
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };

  removeContact = contact => {
    const { contacts } = this.state;
    const { id } = contact;
    console.log('removing contact by id:', id);
    this.setState({
      contacts: contacts.filter(element => element.id !== id),
    });
  };

  handleFiltering = filter => {
    this.setState({ filter: filter });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className={style.App}>
        <h2 className={style.title}>PHONEBOOK</h2>
        <div className={style.content}>
          <Section name="Controls">
            <ContactForm onSubmit={this.addContact} />
          </Section>
          <Section name="Contacts">
            <Filter filter={this.handleFiltering} />
            <ContactList
              contacts={contacts.filter(contact => {
                return (
                  contact.name.toLowerCase().includes(filter.toLowerCase()) ||
                  contact.phone.toLowerCase().includes(filter.toLowerCase()) ||
                  contact.email.toLowerCase().includes(filter.toLowerCase())
                );
              })}
              remove={value => this.removeContact(value)}
            />
          </Section>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  number: PropTypes.number,
  filter: PropTypes.string,
};

export default App;
