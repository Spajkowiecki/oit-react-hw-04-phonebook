import Section from './Section/Section';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import style from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import { Provider } from 'react-redux';
import store from '../redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Phonebook />
    </Provider>
  );
}

function Phonebook() {
  return (
    <div className={style.app}>
      <div className={style.container}>
        <Section name="Contact">
          {/* <ContactForm /> */}
          <div className={style.contact}>
            <ContactForm />
          </div>
        </Section>
        <Section name="Contacts list:">
          <Filter />
          <ContactList />
        </Section>
      </div>
    </div>
  );
}

// function Phonebook() {
//   //? HOOKS
//   const { filter, setFilter, FilterContacts } = useFilter();
//   const { removeContact, addContact, contacts } = useContacts(filter);
//   //? STATES
//   //filter for searching contacts in array

//   return (
//     <div className={style.App}>
//       <h2 className={style.title}>PHONEBOOK</h2>
//       <div className={style.content}>
//         <Section name="Controls">
//           <ContactForm contact={addContact} />
//         </Section>
//         <Section name="Contacts">
//           <Filter value={setFilter} />
//           <ContactList
//             contacts={filter ? FilterContacts(contacts) : contacts}
//             remove={removeContact}
//           />
//         </Section>
//       </div>
//     </div>
//   );
// }
