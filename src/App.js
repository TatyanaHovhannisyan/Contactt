import React, { PureComponent } from "react";

import ContactForm from "./components/ContatctForm/ContactForm"
import ContactsList from "./components/ContactList";
import Filter from "./components/Filter/Filter";

import './App.css';
import ErrorBoundary from "./components/ErrorBoundary";


class App extends PureComponent {      //Why not PureComponent?
  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      filter: ''
    }
  }

  handleAddContact = (newContact) => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact]
    }))

  }

  onCheckUnique = (name, surname, phone) => {
    const { contacts } = this.state;     


    const isExistContact = !!contacts.find((contact) => (contact.name === name)); // Add ability to keep several phone numbers
    isExistContact && alert("Contact is already exist");

    // const isExistName = !!contacts.find((contact) => (contact.name === name && contact.surname === surname)); 


 
    return !isExistContact
  }

  // handleRemoveContact = (id) => {
  //   return this.setState(({ contacts }) => ({ contacts: contacts.filter((contact) => contact.id !== id) })) // Why function?
  // }


  handleRemoveContact = (id) => {
    const { contacts } = this.state
    return this.setState({ contacts: contacts.filter((contact) => contact.id !== id) })    // Why function?   
  }



  handleFilterChange = (filter) => this.setState({ filter });

  getContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }

  resetForm = () => {
    return this.setState({
      contacts: []
    })
  }

  render() {
    const { filter } = this.state;
    const getContacts = this.getContacts()

    //Add search by surname and phone
    return (
      
      <div className="main">
        <div className="form">
          <ErrorBoundary>
          <ContactForm onAdd={this.handleAddContact} onCheckUnique={this.onCheckUnique} />
          </ErrorBoundary>
        </div>

        <div className="list">
          <h2>Contact List</h2>

          <Filter filter={filter} onChange={this.handleFilterChange} />
          <button className="remove" onClick={this.resetForm}>Remove all</button>
          <ContactsList contacts={getContacts} onRemove={this.handleRemoveContact} />
        </div>
      </div>
      
    )
  }
}

export default App;