import React from 'react';
import { MdDelete } from 'react-icons/md';
import FormButton from '../FormButton';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, phoneNumber }) => (
        <li key={id} className={s.item}>
          <span className={s.itemName}>{name}</span>
          <span className={s.itemPhone}>{phoneNumber}</span>
          <FormButton
            onClick={() => onDeleteContact(id)}
            aria-label="Delete contact"
          >
            <MdDelete size="18" />
          </FormButton>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};
