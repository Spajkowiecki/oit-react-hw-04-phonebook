import PropTypes from 'prop-types';
import style from './Section.module.css';

export default function Section({ children, name }) {
  return (
    <section className={style.section}>
      <h2>{name}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
