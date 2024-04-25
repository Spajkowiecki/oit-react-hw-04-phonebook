import { Component } from 'react';
import style from './ContactForm.module.css';

class ContactForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
    //getting data from fields
    const form = event.target;
    //all inputs example usage inputs[<here name of input>]
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const phone = form.elements.phone.value;
    this.props.onSubmit({ name, email, phone });

    form.reset();
  };

  render() {
    return (
      <div className={style.formContainer}>
        <p>Add Contact</p>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            name & surename:
            <input
              name="name"
              type="text"
              placeholder="Contact name & surname"
              required
            />
          </label>

          <label htmlFor="email">
            email address:
            <input
              name="email"
              type="email"
              placeholder="Contact email address"
            />
          </label>

          <label htmlFor="name">
            phone number:
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
  }
}

export default ContactForm;
