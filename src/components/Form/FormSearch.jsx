import React from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';


// }

const FormSearch = ({ filter, onChangeFilter }) => {
  return (
    <label className={css.formSearch}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
        className={css.inputFormSearch}
      />
    </label>
  );
};

export default FormSearch;

FormSearch.propTypes = {
  onChange: PropTypes.func,
};