import {useState} from "react";
import {useDispatch} from 'react-redux';
import actionsContacts from '../../redux/contacts/contacts-actions';
import s from './ContactForm.module.css'
import { BsFillPatchPlusFill } from "react-icons/bs";

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const onSubmit = () => dispatch(actionsContacts.addContact(name, number));

  const onNameChange = (e) => setName(e.target.value);
  const onNumberChange = (e) => setNumber(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };


  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.labelForm}>
        Name{" "}
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={onNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={s.labelForm}>
        Number{" "}
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={onNumberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={s.btnAddContact} type="submit">
        <BsFillPatchPlusFill
        fill="blue"
        /> Add contact 
      </button>
    </form>
  );
}

export default ContactForm;