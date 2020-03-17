import React, { Component } from 'react';

import './App.css';
import RestaurantGrid from './Components/RestaurantGrid';
import Search from './Components/Search'

const list = [
  { id: 1, name: "Kanú", score: 5, lastTimeVisited: "11/02/2019", address: "Martinez" },
  { id: 2, name: "Sushi Club", score: 5, lastTimeVisited: "11/02/2019", address: "Pilar" },
  { id: 3, name: "Sushi Town", score: 5, lastTimeVisited: "11/02/2019", address: "Martinez" },
  { id: 4, name: "Parú", score: 5, lastTimeVisited: "11/02/2019", address: "Pilar" },
  { id: 5, name: "Fabric Sushi", score: 5, lastTimeVisited: "11/02/2019", address: "San Isidro" },
]
class App extends Component {
  render() {
    return (

      <>
        <div style={{ textAlign: 'center' }}>
          <h1>Sushi Masters</h1>
        </div>
        <Search />
        <RestaurantGrid dataGrid={list} />
      </>
    );
  }
}

export default App;
