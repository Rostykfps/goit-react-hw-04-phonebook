import { useState } from 'react';
import { Button, Form, FormInput, FormLabel } from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
  const [name, setname] = useState('');
  const [number, setnumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({ name, number });

    setname('');
    setnumber('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setname(value);
        break;

      case 'number':
        setnumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </FormLabel>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
