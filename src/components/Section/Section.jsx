import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Section.module.css';

class Section extends Component {
  render() {
    const { name, children } = this.props;
    return (
      <section className={style.section}>
        <h2>{name}</h2>
        {children}
      </section>
    );
  }
}

Section.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
