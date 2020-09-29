import React, { Component } from 'react';
import './App.css';
import { CardList } from './Components/card-list/CardList';
import { SearchBox } from './Components/search/search';


class App extends Component { 
  constructor () {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount () {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({ monsters : users }));
  }
 
  handleChange = event => this.setState({ searchField: event.target.value});

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

  return (
    <div className="App">
    <h1 className="title"> Fluffy Rolodex </h1>
    <SearchBox 
      placeholder="search..."
      handleChange={this.handleChange}
    />
    <CardList monsters={filteredMonsters} />
    </div>
  );
  }
}

export default App;
