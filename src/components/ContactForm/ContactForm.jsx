import { useState } from 'react';
import { useAddContactMutation } from 'redux/contacts/contacts-slice';
import { Form } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact, {isLoading}] = useAddContactMutation();

  const handleChange = event => {
    const { name: eventName, value: eventValue } = event.currentTarget;

    switch (eventName) {
      case 'name':
        setName(eventValue);
        break;
      case 'number':
        setNumber(eventValue);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addContact({ name, number });
    } catch (error) {
      console.log('error');
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </div>
      <div>
        <label htmlFor="number">Number</label>
        <input
          id="number"
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </div>
      <button type="submit" disabled={isLoading}>Add contact</button>
    </Form>
  );
};
