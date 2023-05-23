import { Component } from 'react';
/*
component class allows us to turn functional components
to class component
*/
//import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

class App extends Component {
  // consructor always runs first when App is called
  constructor() {
    super(); // overrides methods of superclass Component

    this.state = {
      // name: 'Nury'

      monsters: [
        // instead of hardcoding the data, access using an API

        // {
        //   id: '0',
        //   name: 'Frankie'
        // },
        // {
        //   id: '1',
        //   name: 'Zolo'
        // },
        // {
        //   id: '2',
        //   name: 'Megan'
        // }
      ],
      searchField: ''
      // arrays created with []
    } // state is always a json object
  }

  // life cycle method used to re-render the state component
  // this method can be used for when the first time react renders the component
  componentDidMount() {
    // fetch is a promise in React, which is a way to handle
    // asynchronous methods like fetching a website
    // then you have a .then for code to execute once it is successful
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      }));
      // first get response as a whole (entire json object)
      // and then separate them into users
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchField};
    })
  }

  // explicitly telling our class component to render app
  render() {
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    }));

    return (
      <div className='App'>

      <SearchBox className='serachBox' onChangeHandler={onSearchChange} placeholder='Search monsters...'></SearchBox>

        {
          // filteredMonsters.map((monster) => {
          //   return (
          //     <div key={monster.id}>
          //       <h1>{monster.name}</h1>
          //     </div>
          //   )
          // })

          // custom components that are imported are capitalized
          <CardList monsters={filteredMonsters}></CardList>
        }
      </div>
    );
  }
}

export default App;
