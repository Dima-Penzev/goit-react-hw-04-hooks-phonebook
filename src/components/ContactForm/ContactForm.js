import { useState } from "react";
import shortid from "shortid";
import s from "./ContactForm.module.css";

function ContactForm() {
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
    // this.setState({
    //   [e.currentTarget.name]: e.currentTarget.value,
    // });
    handleAddId();
  };

  const handleAddId = () => {
    setId(`id-${shortid.generate()}`);
    // this.setState({
    //   id: `id-${shortid.generate()}`,
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    reset();
    console.log({ id, name, number });
    return { id, name, number };
  };

  const reset = () => {
    setId("");
    setName("");
    setNumber("");
    // this.setState({
    //   name: "",
    //   number: "",
    // });
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

// class ContactForm extends Component {
//   state = {
//     id: "",
//     name: "",
//     number: "",
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset() {
//     this.setState({
//       name: "",
//       number: "",
//     });
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label className={s.label} htmlFor={this.nameInputId}>
//           Name
//         </label>
//         <input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//           value={this.state.name}
//           required
//           onChange={this.handleChange}
//           id={this.nameInputId}
//           className={s.input}
//         />

//         <label className={s.label} htmlFor={this.numberInputId}>
//           Number
//         </label>
//         <input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//           value={this.state.number}
//           required
//           onChange={this.handleChange}
//           id={this.numberInputId}
//           className={s.input}
//         />

//         <button type="submit" className={s.addBtn}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

export default ContactForm;
