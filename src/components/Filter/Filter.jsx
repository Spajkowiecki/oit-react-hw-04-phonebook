import { Component } from 'react';
import style from './Filter.module.css';
import PropTypes from 'prop-types';

class Filter extends Component {
  handleChange = event => {
    this.props.filter(event.target.value);
  };

  render() {
    const { value } = this.props;
    return (
      <input
        className={style.filter}
        type="text"
        placeholder="search for contact"
        value={value}
        onChange={this.handleChange}
      ></input>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string,
};

export default Filter;
