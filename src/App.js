import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactsList/ContactList";
import Filter from "./components/Filter/Filter";
import s from "./App.module.css";

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem("contacts")) ?? []
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (data) => {
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts`);
    } else {
      setContacts([data, ...contacts]);
    }
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getProperContact = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = (idContact) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== idContact)
    );
  };

  return (
    <div className={s.container}>
      <div className={s.forms}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler} />
      </div>

      <div className={s.contacts}>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={getProperContact()}
          onDeleteContact={deleteContact}
        />
      </div>
    </div>
  );
}

export default App;
