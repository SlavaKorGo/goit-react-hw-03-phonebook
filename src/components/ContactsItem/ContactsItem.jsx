import React from 'react';
import PropTypes from 'prop-types';
import css from '../ContactsList/ContactsList.module.css';

const ContactItem = ({ name, number, id, onDeleteItem }) => {
  return (
    <li className={css.listItem}>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => onDeleteItem(id)} className={css.btnDelete}>Delete</button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onDeleteItem: PropTypes.func,
};