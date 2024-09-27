import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';
import PropTypes from 'prop-types';
import { setFilter } from '../../redux/reducers';

export default function Filter() {
  const dispatch = useDispatch();

  const filterValue = event => {
    dispatch(setFilter(event.target.value));
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
