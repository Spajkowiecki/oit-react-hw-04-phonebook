import style from './ContactForm.module.css';

export default function ContactForm({ contact }) {
  const handleSubmit = event => {
    event.preventDefault();
    //getting data from fields
    const form = event.target;
    //all inputs example usage inputs[<here name of input>]
    const data = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      phone: form.elements.phone.value,
    };

    //reset form after submitting
    form.reset();

    //returning object, for destruct it later
    contact(data);
  };

  return (
    <div className={style.formContainer}>
      <p>Add Contact</p>
      <form className={style.form} onSubmit={handleSubmit}>
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

        <label htmlFor="phone">
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
