import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from '../components/Form/Form';
import FormSearch from 'components/Form/FormSearch';
import ContactsList from './ContactsList/ContactsList';
import css from './Form/Form.module.css';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
    
  };
 
  componentDidMount() {
		const localData = localStorage.getItem('contacts')
		if (localData) {
			this.setState({ contacts: JSON.parse(localData) })
		}
	}

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
			localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
		}
  }

  addItem = e => {
    const id = nanoid();
    const name = e.name;
    const number = e.number;
  
    if (this.state.contacts.find(contact => name === contact.name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
  
    const newContact = { id, name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
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



