import style from './Filter.module.css';
import PropTypes from 'prop-types';

export default function Filter({ value }) {
  const filterValue = event => {
    value(event.target.value);
  };

  return (
    <input
      className={style.filter}
      type="text"
      placeholder="search for contact"
      onChange={filterValue}
    ></input>
  );
}

Filter.propTypes = {
  value: PropTypes.func,
};
