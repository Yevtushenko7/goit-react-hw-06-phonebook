import React from "react";
import { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactsList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
class App extends Component {

  render() {
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    );
  }
};

export default App;
