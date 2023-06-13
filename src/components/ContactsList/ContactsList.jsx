import React from 'react';
import ContactItem from '../ContactsItem/ContactsItem';
import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

const ContactsList = ({ contacts, onDeleteItem }) => {
  return (
    <div className={css.contacts}>
      <ul className={css.contactList}>
        {contacts.map(contact => (
          <ContactItem
            name={contact.name}
            number={contact.number}
            id={contact.id}
            key={contact.id}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.array,
  onDeleteItem: PropTypes.func,
};