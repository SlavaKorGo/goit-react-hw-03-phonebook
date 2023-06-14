import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from '../components/Form/Form';
import FormSearch from 'components/Form/FormSearch';
import ContactsList from './ContactsList/ContactsList';
import css from './Form/Form.module.css';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    
  };


  addItem = e => {
    const id = nanoid();
    const name = e.name;
    const number = e.number;
    const contactsLists = [...this.state.contacts];

    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      contactsLists.push({ name, id, number });
    }

    this.setState({ contacts: contactsLists });
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  filterList = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteItem = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e),
    }));
  };
  componentDidMount () {
console.log("mount")
  };

  componentDidUpdate () {
    console.log("update")
  }; 

  componentWillUnmount () {
    console.log("will")
  }; 

  render() {
    return (
      <React.Fragment>
        <div className={css.container}>
          <h1>Phonebook</h1>
          <Form onSubmit={this.addItem} />
          <h2>Contacts</h2>
         
          <FormSearch 
              filter={this.state.filter}
              onChangeFilter={this.handleChange} />
          <ContactsList
            contacts={this.filterList()}
            onDeleteItem={this.deleteItem}
          />
        </div>
      </React.Fragment>
    );
  }
}

