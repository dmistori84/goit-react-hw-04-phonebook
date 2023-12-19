import { useState } from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({ getContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    getContacts({ name, number });
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.formLabel}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
          className={css.input}
        />
      </label>
      <label className={css.formLabel}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
          className={css.input}
        />
      </label>
      <button type="submit" className={css.btnForm}>
        Add contact
      </button>
    </form>
  );
};
