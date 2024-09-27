import { useDispatch, useSelector } from 'react-redux';
import style from './ContactForm.module.css';
import { addContact } from '../../redux/reducers';

export default function ContactForm() {
  //checking for duplicates
  const filter = useSelector(stateGlobal => {
    return stateGlobal.phonebookFilter.filter;
  });

  const contacts = useSelector(stateGlobal => {
    return stateGlobal.phonebook.contacts;
  });

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    //getting data from fields
    const form = event.target;
    //all inputs example usage inputs[<here name of input>]
    const data = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      number: form.elements.phone.value,
    };

    //reset form after submitting
    form.reset();

    //checking for duplicates:
    const duplicate = contacts.filter(filteredContacts => {
      return (
        filteredContacts.name.toLowerCase().includes(filter.toLowerCase()) ||
        filteredContacts.phone.toLowerCase().includes(filter.toLowerCase()) ||
        filteredContacts.email.toLowerCase().includes(filter.toLowerCase())
      );
    });
    console.log(duplicate);
    //returning object, for destruct it later
    if (duplicate.length >= 1) {
      return alert('This contact already exist!', 'ok');
    } else {
      dispatch(addContact(data));
    }
  };

  return (
    <div className={style.container}>
      <h3>Contact Form</h3>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <label htmlFor="name">
          <p>name & surename:</p>
          <input
            name="name"
            type="text"
            placeholder="Contact name & surname"
            required
          />
        </label>

        <label htmlFor="email">
          <p>email address:</p>
          <input
            name="email"
            type="email"
            placeholder="Contact email address"
          />
        </label>

        <label htmlFor="phone">
          <p>phone number:</p>
          <input
            name="phone"
            type="tel"
            placeholder="Contact Phone number"
            required
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );

  // return (
  //   <div className={style.container}>
  //     <p>Add Contact</p>
  //     <form className={style.formContainer} onSubmit={handleSubmit}>
  //       <label htmlFor="name">
  //         name & surename:
  //         <input
  //           name="name"
  //           type="text"
  //           placeholder="Contact name & surname"
  //           required
  //         />
  //       </label>

  //       <label htmlFor="email">
  //         email address:
  //         <input
  //           name="email"
  //           type="email"
  //           placeholder="Contact email address"
  //         />
  //       </label>

  //       <label htmlFor="phone">
  //         phone number:
  //         <input
  //           name="phone"
  //           type="tel"
  //           placeholder="Contact Phone number"
  //           required
  //         />
  //       </label>

  //       <button type="submit">Add</button>
  //     </form>
  //   </div>
  // );
}
