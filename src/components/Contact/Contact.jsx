import PropTypes from 'prop-types';
import style from './Contact.module.css';

//! refactored Contact class to function
export default function Contact({ contact }) {
  return (
    <div className={style.contact}>
      <div className={style.upper}>
        <p>{contact.name}</p>
      </div>
      <div className={style.bottom}>
        <p className={style.data}>
          <span>Phone: </span>
          <span>{contact.phone}</span>
        </p>
        <p className={style.data}>
          <span>Email: </span>
          <span>{contact.email}</span>
        </p>
      </div>
    </div>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
