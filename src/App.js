import React, { Component } from "react";
import CardList from "./Components/Card-List/Card-List";
import Search from "./Components/Search/Search";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ monsters: data }));
  }

  searchChangeHandler = (e) => this.setState({ searchField: e.target.value });
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    return (
      <div className="app">
        <h1 className="monsterTitle">Monsters Rollodex</h1>
        <Search
          placeholder="search monster"
          searchChange={this.searchChangeHandler}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}
