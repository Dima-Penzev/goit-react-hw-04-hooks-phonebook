import { useState } from "react";
import shortid from "shortid";
import s from "./ContactForm.module.css";

function ContactForm({ onSubmit }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }

    handleAddId();
  };

  const handleAddId = () => {
    setId(`id-${shortid.generate()}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ id, name, number });
    reset();
  };

  const reset = () => {
    setId("");
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={s.label} htmlFor={nameInputId}>
        Name
      </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        value={name}
        required
        onChange={handleChange}
        id={nameInputId}
        className={s.input}
      />

      <label className={s.label} htmlFor={numberInputId}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        value={number}
        required
        onChange={handleChange}
        id={numberInputId}
        className={s.input}
      />

      <button type="submit" className={s.addBtn}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
